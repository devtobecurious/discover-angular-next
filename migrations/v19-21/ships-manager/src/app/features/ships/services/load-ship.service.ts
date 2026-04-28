import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ship } from '../models/ship';

@Injectable({
  providedIn: 'root'
})
export class LoadShipService {
  //private readonly shipStore = new BehaviorSubject<Ship | undefined>(undefined);
  private readonly store = signal<Ship | undefined>(undefined);

  get shipSignal() {
    return this.store.asReadonly();
  }

  dispatch(ship: Ship) {
    this.store.set(ship);
  }
}
