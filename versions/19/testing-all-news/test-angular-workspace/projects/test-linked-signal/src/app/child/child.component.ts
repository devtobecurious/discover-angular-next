import { Component, computed, effect, inject, input, linkedSignal, signal } from '@angular/core';
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

  title = input.required<string>()
  resultTitle = computed(() => signal(this.title()))

  //index = signal(-1)

  // state = computed(() => ({ // Every time options change, all the state is changing, so index is new signal, same behavior as switch map
  //   options: this.options(),
  //   index: signal(-1)
  // }))

  // state = linkedSignal(() => ({source: this.options(), value: signal(-1)}))
  index = linkedSignal(() => this.options()[0])

  // DON'T DO THAT
  // updateIndex = effect(() => {
  //   console.info('ici')
  //   this.options();
  //   this.index.set(-1)
  // })

  // setOptions(options: string[]): void {
  //   this.options.set([...options]) // we can't set the values : readonly
  //   this.index.set(-1)
  // }

  select(id: number): void {
    this.index.set(this.options()[id])
  }
}
