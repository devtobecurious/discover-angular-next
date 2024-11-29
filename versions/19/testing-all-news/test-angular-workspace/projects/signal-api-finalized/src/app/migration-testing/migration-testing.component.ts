import { Component, ElementRef, input, output, viewChild } from '@angular/core';

@Component({
  selector: 'app-migration-testing',
  templateUrl: './migration-testing.component.html',
  styleUrl: './migration-testing.component.css'
})
export class MigrationTestingComponent {
  readonly title = input('');
  readonly newContent = output<string>();

  readonly btnStart = viewChild<ElementRef<HTMLButtonElement>>('btnStart');

  ngOnInit(): void {
    this.newContent.emit('Angular 19 rocks !')
  }
}
