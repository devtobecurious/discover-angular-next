import { Injectable } from '@angular/core';
import { Observable, of, interval } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Wookie } from 'src/app/core/models/wookie';
import { WookieModule } from '../../features/wookies/wookie.module';

@Injectable({
  providedIn: 'root'
})
export class WookiesService {

  constructor() { }

  getAll(name: string = ''): Observable<Wookie[]> {
    return interval(1000).pipe(map(i => [new Wookie(i, 'Name' + name, 100 * i)]));
  }
}
