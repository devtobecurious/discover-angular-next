import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { NewsletterService } from './shared/newsletter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'starwars-small-game';
  readonly VAPID_PUBLIC_KEY = 'BEfaBUPsLxyR0_UbcSCmlTV7ibMf7smzfXNY4dqI8DJUdRYNuuWK2T_rEsGiUe0WZXia1SJhyhOwV02JRYE9zLM';

  constructor(private swPush: SwPush, private newsLetter: NewsletterService) { }

  subscribeToNotifications() {
    from(this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })).pipe(
      switchMap(sub => this.newsLetter.addPushSubscriber(sub))
    ).subscribe();
  }
}
