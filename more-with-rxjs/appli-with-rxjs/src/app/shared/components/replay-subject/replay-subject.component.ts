import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const subject$ = new ReplaySubject(2);

    subject$.subscribe(item => console.log('replay subject', 1, item));

    subject$.next('A');
    subject$.next('B');
    subject$.next('C');

    subject$.subscribe(item => console.log('replay subject', 2, item));

    subject$.next('D');
  }

}
