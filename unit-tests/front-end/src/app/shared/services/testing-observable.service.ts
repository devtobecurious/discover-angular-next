import { Injectable } from '@angular/core';
import { from, Observable, of, timer } from 'rxjs';
import { delayWhen, pluck } from 'rxjs/operators';

export type ingredient = { name: string, time: number};

@Injectable({
  providedIn: 'root'
})
export class TestingObservableService {

  constructor() { }

  getAll(): Observable<string> {
    const cookArray = [
      { name: '🍕', time: 0 },
      { name: '🍅', time: 100 },
      { name: '🧀', time: 1000 },
      { name: '🌶️', time: 2000 },
      { name: '🍄', time: 3000 }
    ];

    return from(cookArray).pipe(
      delayWhen((ingredient: ingredient) => timer(ingredient.time)), // => adds a time before send the element : https://rxjs-dev.firebaseapp.com/api/operators/delayWhen
      pluck('name') // => property to emit : https://www.learnrxjs.io/learn-rxjs/operators/transformation/pluck
    );
  }
}
