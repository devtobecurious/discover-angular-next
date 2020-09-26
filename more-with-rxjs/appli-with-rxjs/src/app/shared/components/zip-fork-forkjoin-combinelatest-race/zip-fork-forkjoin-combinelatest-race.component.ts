import { Component, OnInit, Pipe } from '@angular/core';
import { of, zip, from, merge, forkJoin, combineLatest, timer, race, interval } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { delay, map, mergeAll, mergeMap, mapTo, filter, first } from 'rxjs/operators';

@Component({
  selector: 'app-zip-fork-forkjoin-combinelatest-race',
  templateUrl: './zip-fork-forkjoin-combinelatest-race.component.html',
  styleUrls: ['./zip-fork-forkjoin-combinelatest-race.component.css']
})
export class ZipForkForkjoinCombinelatestRaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const one = of('Hello');
    const two = of('World');
    const three = of('Goodbye');
    const four = of('World');
    const five = of(['Ca', 'va ?']);
    const fiveMerge = five.pipe(mergeMap(item => item.map(res => res)));
  

    const resultZip = zip(one,
      two.pipe(delay(1000)),
      three.pipe(delay(2000)),
      four.pipe(delay(3000)),
      fiveMerge.pipe(delay(4000))); // take only the first element ! because of all other observables

    const sub = resultZip.subscribe(item => console.log('zip', item));

    
    const one1 = of(['Ca', 'va ?']);
    const two1 = of(['Bien', 'Et toi ?']);

    const res = merge(one1, two1);
    const res2 = res.pipe(mergeMap(item => item.map(res => res))).subscribe(ah => console.log('merge ah :>> ', ah));


    ajax.getJSON('https://api.github.com/users').subscribe(item => console.log('ajax users :>> ', item));
    
    forkJoin({
      google: ajax.getJSON('https://api.github.com/users/google'),
      microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),
      users: ajax.getJSON('https://api.github.com/users'),
    }).subscribe(item => console.log('forkJoin :>> ', item));


    const joined$ = forkJoin(
      of(3, 4, 5),
      of('foo', 'of'),
      of(42, 53, 18, 500)
    );
    
    joined$.subscribe(item => console.log('forkJoin 2 :>>', item));


    const combine$ = combineLatest(of(3, 4, 5).pipe(delay(800)),
                                  of(42, 53, 18, 500).pipe(delay(600)),
                                  of('foo', 'of').pipe(delay(500)));
    
   combine$.subscribe(item => console.log('combineLatest 2 :>>', item));

   const timerOne$ = timer(1000, 4000);
    const timerTwo$ = timer(2000, 4000);
    const timerThree$ = timer(3000, 4000);

    combineLatest(
      timerOne$,
      timerTwo$,
      timerThree$,
      // combineLatest also takes an optional projection function
      (one, two, three) => {
        return `Timer One (Proj) Latest: ${one}, 
                  Timer Two (Proj) Latest: ${two}, 
                  Timer Three (Proj) Latest: ${three}`;
      }
    )
    //.subscribe(console.log);

    const example = race(
      //emit every 1.5s
      interval(1500),
      //emit every 1s
      interval(1000).pipe(mapTo('1s won!')),
      //emit every 2s
      interval(2000),
      //emit every 2.5s
      interval(2500).pipe(mapTo('2.5s won!'))
    );

    const subscribe = example.subscribe(val => console.log('race 1 ==> ', val));

    let list1 = of(2, 3, 4, 5, 6);
    let list2 = of(4, 9, 16, 25, 36)
    let final_val = race(list2, list1);
    final_val.subscribe(x => console.log('race 2 ==> ', x));
  }



}
