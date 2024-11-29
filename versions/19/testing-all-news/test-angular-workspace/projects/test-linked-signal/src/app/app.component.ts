import { Component, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  imports: [
    ChildComponent
  ],
  template: `
    <app-child [options]="['test', 'test 1']"></app-child>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  //options = signal<string[]>([])

}
