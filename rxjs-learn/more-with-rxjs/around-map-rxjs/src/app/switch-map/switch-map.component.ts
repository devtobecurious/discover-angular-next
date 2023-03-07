import { Component, OnInit } from '@angular/core';
import { from, observable, Observable, of, range } from 'rxjs';
import { concatMap, delay, map, mergeMap, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  public result$: Observable<any>;

  constructor() { }

  ngOnInit(): void {
    const items$ = from([1,2,3,4]);

    //const freshData = (i) => of(i + '> my new data ' + (i * 500)).pipe(tap(item => console.info(item + 'fresh')),delay(i * 500));

    const freshData = (i, type) => from(fetch('https://swapi.dev/api/people/?search=' + i + "&from=" + type)).pipe(tap(item => console.info(type, item)), mergeMap(response => from(response.json())));

    items$.pipe(
      mergeMap(i => freshData(i, 'merge'))
    ).subscribe(item => console.log('merge', item));

    items$.pipe(
      switchMap(i => freshData(i, 'switch'))
    ).subscribe(item => console.log('switch', item));

    items$.pipe(
      concatMap(i => freshData(i, 'concat'))
    ).subscribe(item => console.log('concat', item));
  }

}
