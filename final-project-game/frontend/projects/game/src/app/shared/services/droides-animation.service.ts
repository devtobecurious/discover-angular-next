// import { Droide } from './../../core/models/droide';
import { Droide } from '~models/droide';
import { Injectable } from '@angular/core';
import { interval, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DroidesAnimationService {


  constructor() { }

  init() {
    timer(1000).pipe(
      map(item => {
        const droide = new Droide()
      })
    )
  }
}
