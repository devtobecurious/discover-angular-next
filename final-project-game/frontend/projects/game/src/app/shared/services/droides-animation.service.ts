// import { Droide } from './../../core/models/droide';
import { Droide } from '~models/droide';
import { Injectable } from '@angular/core';
import { interval, Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DroidesAnimationService {
  private droides$: Observable<Droide>;

  constructor() { }

  init() {
    const droides$ = interval(200).pipe(
      map(item => {
        const droide = new Droide();
        return droide;
      })
    );
  }
}
