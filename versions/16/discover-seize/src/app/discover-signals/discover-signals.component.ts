import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from './services/counter.service';
import { counter, increase, init } from './services';

@Component({
  selector: 'app-discover-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './discover-signals.component.html',
  styleUrls: ['./discover-signals.component.css']
})
export class DiscoverSignalsComponent {
  // private readonly service = inject(CounterService);
  // counter = this.service.count;
  counter = counter;

  init(): void {
    // this.service.init();
    init();
  }

  increase(): void {
    // this.service.increase();
    increase();
  }
}
