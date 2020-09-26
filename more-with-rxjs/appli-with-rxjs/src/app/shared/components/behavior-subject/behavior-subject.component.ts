import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.css']
})
export class BehaviorSubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const subject$ = new BehaviorSubject(0);

    subject$.subscribe(item => console.log('behavior 1', item));

    subject$.next(Math.random());
    subject$.next(Math.random());
    
    subject$.subscribe(item => console.log('behavior 2', item));
    subject$.next(Math.random());

    console.log('behavior', 'value', subject$.value);

  }

}
