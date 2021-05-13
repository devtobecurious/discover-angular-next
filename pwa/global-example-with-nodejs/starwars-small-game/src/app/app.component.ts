import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { from } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { NewsletterService } from './shared/newsletter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'starwars-small-game';
  readonly VAPID_PUBLIC_KEY = 'BEfaBUPsLxyR0_UbcSCmlTV7ibMf7smzfXNY4dqI8DJUdRYNuuWK2T_rEsGiUe0WZXia1SJhyhOwV02JRYE9zLM';

  constructor(private swPush: SwPush, private newsLetter: NewsletterService) { }


  ngOnInit(): void {
    this.swPush.notificationClicks.subscribe(event => {
        const url = event.notification.data?.url;

        console.info(url);
        if (url) {
          window.open(url);
        }
    });
  }



  subscribeToNotifications() {
    from(this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })).pipe(
      tap(sub => console.info(sub)),
      switchMap(sub => this.newsLetter.addPushSubscriber(sub))
    ).subscribe();
  }
}
