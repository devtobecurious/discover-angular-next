import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const subject$ = new AsyncSubject();

    subject$.subscribe(item => console.log('async subject', 1, item));
    
    subject$.next('A');
    subject$.next('B');
    subject$.next('C');
    
    subject$.subscribe(item => console.log('async subject', 2, item));
    
    subject$.next('D');

    console.log('when ...');

    subject$.complete();

  }

}
