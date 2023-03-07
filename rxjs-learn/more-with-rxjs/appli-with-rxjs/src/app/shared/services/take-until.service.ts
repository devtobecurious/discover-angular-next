import { interval } from 'rxjs';
import { Injectable } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TakeUntilService {

  constructor() { }

  run() {
    const slow$ = interval(1000);

    const fast$ = interval(100).pipe(takeUntil(slow$));

    fast$.subscribe({ 
      next(n) {
        console.log('fast', n);
      },
      complete() {
        console.log('fast : done');
      }
    });

    return slow$;
  }
}
