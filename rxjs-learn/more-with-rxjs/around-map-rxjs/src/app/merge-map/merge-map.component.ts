import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { concatMap, delay, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {
  public result$: Observable<any>;

  constructor() { }

  ngOnInit(): void {
    const firstObservable = new Observable(observer => {
      observer.next('1.0');
      observer.next('1.1');

    });

    const secondObservable = new Observable(observer => {
      observer.next('2. Hello');
      observer.next('2. Ca va ?');

    });

    // firstObservable.pipe(
    //   concatMap(item => secondObservable)
    // ).subscribe(item => console.log('??', item));

    this.result$ = firstObservable.pipe(
      mergeMap(item => of('item' + item).pipe(delay(500), map(item => item + '10')))
    );

    firstObservable.pipe(
      mergeMap(item => of('item' + item).pipe(delay(500), map(item => item + '10')))
    ).subscribe(item => console.info('mergeMap', item));
  }

}
