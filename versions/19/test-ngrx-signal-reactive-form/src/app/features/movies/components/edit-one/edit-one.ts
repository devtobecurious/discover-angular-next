import { Component, inject } from '@angular/core';
import { BooksStore } from '../../store';

@Component({
  selector: 'app-edit-one',
  templateUrl: './edit-one.html',
  styleUrl: './edit-one.css'
})
export class EditOne {
  private readonly store = inject(BooksStore)
  movie = this.store.currentMovie;
}
