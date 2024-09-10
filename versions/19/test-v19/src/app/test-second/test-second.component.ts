import { AsyncPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { delay, of, shareReplay } from 'rxjs';

@Component({
  selector: 'app-test-second',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './test-second.component.html',
  styleUrl: './test-second.component.css'
})
export class TestSecondComponent {
  characters$ = of([{ id: 1, name: 'Bilbo'}, { id: 1, name: 'Grand pas'}]).pipe(delay(1500))
  title$$ = signal('A middle journey')
}
