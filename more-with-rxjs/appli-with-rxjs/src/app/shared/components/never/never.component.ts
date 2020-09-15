import { Component, OnInit } from '@angular/core';
import { NEVER, never } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-never',
  templateUrl: './never.component.html',
  styleUrls: ['./never.component.css']
})
export class NeverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const never$ = NEVER.pipe(startWith(7));

    never$.subscribe(item => console.log('never', 7));
  }

}
