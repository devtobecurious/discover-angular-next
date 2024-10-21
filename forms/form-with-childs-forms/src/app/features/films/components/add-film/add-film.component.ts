import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomInputComponent } from "../../../../customs/custom-input/custom-input.component";

@Component({
  selector: 'app-add-film',
  standalone: true,
  imports: [ReactiveFormsModule, CustomInputComponent],
  templateUrl: './add-film.component.html',
  styleUrl: './add-film.component.css'
})
export class AddFilmComponent {
  directors = signal([{
    id: 1,
    label: 'Georges Lucas'
  },
  {
    id: 2,
    label: 'J J Abrams'
  }])

  filmForm = inject(FormBuilder).group({
    name: '2'
  })

  save(): void {
    console.info(this.filmForm.valid)
  }
}
