import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { publishReplay, refCount } from 'rxjs/operators';

@Component({
  selector: 'app-publish-replay',
  templateUrl: './publish-replay.component.html',
  styleUrls: ['./publish-replay.component.css']
})
export class PublishReplayComponent implements OnInit {
  private observ: Observable<string>;


  constructor() { }

  ngOnInit(): void {
    this.observ = from(['first', 'second', 'last']).pipe(publishReplay(1), refCount());

    this.observ.subscribe(data => console.log('first log', data));    
    this.observ.subscribe(data => console.log('second log', data));
    this.observ.subscribe(data => console.log('third log', data));
    this.observ.subscribe(data => console.log('fourth log', data));
  }

}
