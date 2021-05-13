import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  constructor(private httpClient: HttpClient) { }

  addPushSubscriber(sub: any) {
    console.info(sub);
    return this.httpClient.post(environment.apis.base + environment.apis.notifications.url, sub);
  }

  send() {
    return this.httpClient.post(environment.apis.base + environment.apis.newsletter.url, null);
  }
}
