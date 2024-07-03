import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'coalescing-true';

  display(): void {
    console.info('trigger');
  }

  doSomething(): void {
    console.info('something');
  }

  doSomethingElse(): void {
    console.info('something else');
  }
}
