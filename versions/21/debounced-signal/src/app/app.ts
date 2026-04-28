import { Component, debounced, resource, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('debounced-signal');
  protected readonly item = debounced(this.title, 1000);

  change(): void {
    this.title.update(old => old + '!');
  }
}
