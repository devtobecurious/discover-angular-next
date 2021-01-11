import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Enemy } from '../../../core/models/enemy';

@Injectable({
  providedIn: 'root'
})
export class EnemyService {

  constructor() { }

  loadAll(): Observable<Enemy[]> {
    return of([
      { type: 'droide', name: 'Droide001', location: { x: 0, y: 0} },
      { type: 'droide', name: 'Droide002', location: { x: 0, y: 0} },
    ]);
  }
}
