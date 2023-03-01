import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  count = signal(0);

  init(value = 10): void {
    this.count.set(value);
  }

  increase(value = 1): void {
    this.count.update(item => item + value);
  }
}
