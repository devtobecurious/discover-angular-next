import { Component, OnInit } from '@angular/core';
import { concat, observable, Observable, of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {
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
      observer.complete();
    });

    this.result$ = firstObservable.pipe(
      concatMap(item => of('item' + item).pipe(delay(500)))
    );

    // const source = of(2000, 1000);
    // // map value from source into inner observable, when complete emit result and move to next
    // const example = source.pipe(
    //   concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    // );
    // //output: With concatMap: Delayed by: 2000ms, With concatMap: Delayed by: 1000ms
    // const subscribe = example.subscribe(val =>
    //   console.log(`With concatMap: ${val}`)
    // );
  }

}
