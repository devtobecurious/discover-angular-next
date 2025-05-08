import { Component, computed, inject, input, OnInit, signal, Signal } from '@angular/core';
import { MoviesStore } from '../../store';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-one',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-one.html',
  styleUrl: './edit-one.css'
})
export class EditOne implements OnInit {
  private readonly store = inject(MoviesStore)
  private readonly formBuilder = inject(FormBuilder)
  isLoading = this.store.loading
  id = input<number>()
  categoryId = input<number>()

  movieFormSignal = computed(() => {
    const movie = this.store.selectedMovie()

    if(movie) {
      return this.formBuilder.group({
        title: movie.title,
        overview: movie.overview,
        release_date: movie.release_date
      })
    }

    return undefined
  })

  ngOnInit(): void {
    const id = this.id()

    if(id) {
      this.store.setOne(id)
    }
  }

  saveOne(): void {
    const form = this.movieFormSignal()

    if(form) {
      const movie = form.value

      console.log(movie)
    }
  }
}
