import { Component, effect, inject, input, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  template: `
  <h1>Child {{ index() }}</h1>
    <ul>
      @for (option of options(); track option) {
        <li (click)="select($index)">{{option}}</li>
      }
    </ul>
  `,
  styleUrl: './child.component.css'
})
export class ChildComponent {
  options = input.required<string[]>() // How we can update the index to -1
  index = signal(-1)

  // DON'T DO THAT
  updateIndex = effect(() => {
    console.info('ici')
    this.options();
    this.index.set(-1)
  })

  // setOptions(options: string[]): void {
  //   this.options.set([...options]) // we can't set the values : readonly
  //   this.index.set(-1)
  // }

  select(i: number): void {
    this.index.set(i)
  }
}
