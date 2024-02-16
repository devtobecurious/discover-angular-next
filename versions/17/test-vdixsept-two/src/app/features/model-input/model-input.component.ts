import { Component, model } from '@angular/core';

@Component({
  selector: 'app-model-input',
  standalone: true,
  imports: [],
  templateUrl: './model-input.component.html',
  styleUrl: './model-input.component.css'
})
export class ModelInputComponent {
  titreChanson = model.required<string>();

  change(): void {
    this.titreChanson.set('Oh marie !');
  }
}
