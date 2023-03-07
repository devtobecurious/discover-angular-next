import { Component, OnInit } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { pluck, share, last, tap, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {
  private routeEnd = new Subject<{ data: any, url: string }>();

  constructor() { }

  ngOnInit(): void {
    const lastUrl = this.routeEnd.pipe(
      pluck('url'), // take the url propertie of the subject item,
      share()
    );

    const subscriber = lastUrl.subscribe(item => console.log('ShareComponent share: 1', item));
    this.routeEnd.next({ url: 'swapi', data: {} });
    const secondSubscriber = lastUrl.subscribe(item => console.log('ShareComponent share: 2', item));

    const source = timer(1000);
    const example = source.pipe(tap(() => console.log('ShareComponent Side effect ?')),
      mapTo('Result ??'));

    const subscribe = example.subscribe(val => console.log('ShareComponent source with side effect .1.', val));
    const subscribe2 = example.subscribe(val => console.log('ShareComponent source with side effect .2.', val));

    const sharedExample = example.pipe(share());

    const subscribe3 = sharedExample.subscribe(val => console.log('ShareComponent source with side effect .2.', val));
    const subscribe4 = sharedExample.subscribe(val => console.log('ShareComponent source with side effect .3.', val));
  }

}
