import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { Wookie } from 'src/app/core/models/wookie';

@Injectable({
  providedIn: 'root'
})
export class WookieService {

  constructor() { }

  getOne(): Observable<Wookie> {
    console.log('coucou');
    return interval(1000).pipe(
      map(id => new Wookie(id, 'chewie ' + id, id * 100))
    );
  }
}
