import { concatMap, map, mergeMap, switchMap, delay } from 'rxjs/operators';
import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { interval, Observable, timer, zip, of, from } from 'rxjs';

@Component({
  selector: 'app-cold-or-hot',
  templateUrl: './cold-or-hot.component.html',
  styleUrls: ['./cold-or-hot.component.css']
})
export class ColdOrHotComponent implements OnInit {
  public obs$: Observable<string>;
  public obs2$: Observable<string>;
  public obsRandom$: Observable<number>;

  constructor() { }

  ngOnInit(): void {
    this.obsRandom$ = new Observable(observer => {
      observer.next(Math.random());
    });
    this.obsRandom$.subscribe(item => console.log('cold random 1', item));
    this.obsRandom$.subscribe(item => console.log('cold random 2', item));

    const rand = Math.random();

    const obs$Hot = new Observable(observer => {
      observer.next(rand);
    });
    obs$Hot.subscribe(item => console.log('hot random 1', item));
    obs$Hot.subscribe(item => console.log('hot random 2', item));


    this.obs$ = from(['🍕', '🍪', '🍔', '🌭', '🍟'])
      .pipe(
        map(val => {
          console.log(val);
          return `Miam ${val}!`;
        }));
    // this.obs2$ = zip(this.obs$, interval(1000)).pipe(map(item => item[0]));
    this.obs2$ = this.obs$.pipe(concatMap(item => of(item).pipe(delay(1000)))); // interval(1000).pipe(concatMap(item => this.obs$));

    this.obs2$.subscribe(item => console.log('hot miam', item));
  }

}
