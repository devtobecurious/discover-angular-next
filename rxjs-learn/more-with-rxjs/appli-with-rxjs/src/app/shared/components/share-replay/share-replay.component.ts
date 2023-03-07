import { pluck, shareReplay } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.css']
})
export class ShareReplayComponent implements OnInit {
  private routeEnd = new Subject<{ data: any, url: string}>();

  constructor() { }

  ngOnInit(): void {
    const lastUrl = this.routeEnd.pipe(
      pluck('url'), // take the url propertie of the subject item,
      shareReplay(1)
    );

    const subscriber = lastUrl.subscribe(item => console.log('ShareReplayComponent share: 1', item));

    const secondSubscriber = lastUrl.subscribe(item => console.log('ShareReplayComponent share: 2', item));
    this.routeEnd.next({ url: 'swapi', data: {} });
    this.routeEnd.next({ url: 'swapi 2', data: {} });
  }

}
