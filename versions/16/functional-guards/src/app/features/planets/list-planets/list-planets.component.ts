import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-planets',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './list-planets.component.html',
  styleUrls: ['./list-planets.component.css']
})
export class ListPlanetsComponent {
  planetEditForm = inject(FormBuilder).group({
    name: ['', Validators.required],
  });

  onSubmit(): void {
    console.log('invalid', this.isInvalid);

  }

  get isInvalid(): boolean {
    return this.planetEditForm.invalid;
  }
}
