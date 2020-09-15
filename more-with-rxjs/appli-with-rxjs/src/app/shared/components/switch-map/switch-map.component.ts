import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { delay, mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const getData = param => {
      return of(`retrieved new data with param ${param}`).pipe(
        delay(1000)
      );
    };

    // not run
    from([1, 2, 3, 4]).pipe(switchMap(item => getData(item)))
    .subscribe(item => console.log('switchmap', item));
  }

}
