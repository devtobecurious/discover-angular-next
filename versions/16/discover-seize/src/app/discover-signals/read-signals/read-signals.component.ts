import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../services/counter.service';
import { counter } from '../services';

@Component({
  selector: 'app-read-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './read-signals.component.html',
  styleUrls: ['./read-signals.component.css']
})
export class ReadSignalsComponent {
  // private readonly service = inject(CounterService);
  // counter = this.service.count;
  counter = counter;


}
