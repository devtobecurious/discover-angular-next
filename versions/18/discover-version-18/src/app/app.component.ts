import { Component, NgZone, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestPushComponent } from './test-push/test-push.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestPushComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  counter = signal<number>(0)
  private readonly zone = inject(NgZone)

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        this.counter.set(this.counter() + 1)
      }, 1000)
    });
  }
}
