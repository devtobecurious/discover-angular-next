import { Component, model, signal } from '@angular/core';

@Component({
  selector: 'app-model-input',
  standalone: true,
  imports: [],
  templateUrl: './model-input.component.html',
  styleUrl: './model-input.component.css'
})
export class ModelInputComponent {
  title = signal<string>('Mes films');
  titreChanson = model.required<string>();

  change(): void {
    this.titreChanson.set('Oh marie !');
  }
}
