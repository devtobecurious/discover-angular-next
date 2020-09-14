import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { delay, map, mergeAll, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const getData = param => {
      return of(`retrieved new data with param ${param}`).pipe(
        delay(1000)
      );
    };

    // without mergeMap
    // two subscribe
    from([1, 2, 3, 4]).pipe(map(item => getData(item)))
                      .subscribe(item => item.subscribe(value => console.log('without merge map', value)));

    from([1, 2, 3, 4]).pipe(map(item => getData(item)),
                            mergeAll())
                      .subscribe(item => console.log('mergemap', item));

    from([1, 2, 3, 4]).pipe(mergeMap(item => getData(item)))
                      .subscribe(item => console.log('mergemap', item));
  }

}
