import { Component, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  imports: [
    ChildComponent
  ],
  template: `
    <button (click)="changeOptions()">New options</button>
    <app-child [options]="options()"  title="hello"></app-child>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  options = signal<string[]>(['essai 1'])

  changeOptions(): void {
    this.options.set([...this.options(), `essai ${this.options().length + 1}`])
  }
}
