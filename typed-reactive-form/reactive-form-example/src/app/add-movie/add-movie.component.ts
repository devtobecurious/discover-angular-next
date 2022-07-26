import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

type Movie = {
  title: FormControl<string>;
};

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  movieGroup !: FormGroup<Movie>;

  constructor() {

  }

  ngOnInit(): void {
    const control = new FormControl('', { nonNullable: true });
    control.setValue('test');

    const controlNumber = new FormControl(0, { nonNullable: true });
    controlNumber.setValue(0);

    const controlDate = new FormControl(new Date(), { nonNullable: true });
    controlDate.setValue(new Date());

    this.movieGroup = new FormGroup<Movie>({
      title: new FormControl('', { nonNullable: true })
    });

    // this.movieGroup.value
  }

  add() {
    console.info(this.movieGroup.value.title);
  }
}
