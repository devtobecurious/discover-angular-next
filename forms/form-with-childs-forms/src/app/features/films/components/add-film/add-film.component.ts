import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomSelectComponent } from '../../../../customs/custom-select/custom-select.component';
import { forkJoin, Observable, of, timer } from 'rxjs';
import { CustomGroupComponent } from '../../../../customs/custom-group/custom-group.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-add-film',
  standalone: true,
  imports: [ReactiveFormsModule, CustomGroupComponent, JsonPipe],
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
    address: {
      directorId: '2',
      typeId: '2'
    }
  })

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.info(this.filmForm.valid)
  }

  save(): void {
    console.info(this.filmForm.value)
  }
}
