import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeaponService {

  constructor() { }

  validateName(value: string): Observable<boolean> {
    return timer(500).pipe(
      map(id => {
        console.log('WeaponService :>> ');
        return Math.random() === 0;
      })
    );
  }
}
