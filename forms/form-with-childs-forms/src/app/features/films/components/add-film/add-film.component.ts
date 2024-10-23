import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomSelectComponent } from '../../../../customs/custom-select/custom-select.component';

@Component({
  selector: 'app-add-film',
  standalone: true,
  imports: [ReactiveFormsModule, CustomSelectComponent],
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

  types = signal([{
    id: 1,
    label: 'SF'
  },
  {
    id: 2,
    label: 'Fantasy'
  }])

  filmForm = inject(FormBuilder).group({
    directorId: '2',
    typeId: '1'
  })

  save(): void {
    console.info(this.filmForm.valid)
  }
}
