import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Wookie } from 'src/app/core/modes/wookie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WookiesWithHttpService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Wookie[]> {
    return this.httpClient.get<Wookie[]>(environment.apis.wookies.url);
  }
}
