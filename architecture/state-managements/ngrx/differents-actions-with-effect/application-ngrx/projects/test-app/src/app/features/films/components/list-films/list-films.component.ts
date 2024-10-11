import { Component, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ApplicationState } from '../../../../reducers';
import { selectAllFilms } from '../../store/films.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-list-films',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './list-films.component.html',
  styleUrl: './list-films.component.css'
})
export class ListFilmsComponent {
  private readonly store = inject(Store<ApplicationState>)
  films$ = this.store.pipe(select(selectAllFilms))
}
