import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const serie1$ = from([Math.random(), Math.random(), Math.random(), Math.random()]);
    const serie2$ = from([Math.random(), Math.random()]);

    const concat$ = serie1$.pipe(concatMap(item => serie2$));

    concat$.subscribe(item => console.log('concatmap', 'A', item)); // 4*4 results
    concat$.subscribe(item => console.log('concatmap', 'B', item));
  }

}
