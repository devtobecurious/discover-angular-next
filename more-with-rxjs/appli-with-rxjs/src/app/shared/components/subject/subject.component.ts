import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor() { } 

  ngOnInit(): void {
    const subject$ =  new Subject();

    subject$.subscribe(data => console.log('subject', 1, data));
    subject$.subscribe(data => console.log('subject', 2, data));

    subject$.next(Math.random());

    // Cold Observable to hot subject

    const cold$ = Observable.create(observer => {
      observer.next(Math.random());
    });

    const hot$ = new Subject();

    hot$.subscribe(data => console.log('subject', 'hot', 1, data));
    hot$.subscribe(data => console.log('subject', 'hot', 2, data));

    cold$.subscribe(hot$);
  }

}
