import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Wookie } from 'src/app/core/models/wookie';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WookieService {

  constructor() { }

  getAll(): Observable<Wookie[]> {
    console.warn('fetching data');
    const list: Wookie[] = [
      { id: 1, name: 'Chewie', size: 250 },
      { id: 3, name: 'Tralk', size: 300 }
    ];

    return of(list).pipe(delay(1000));
  }
}
