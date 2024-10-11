import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { ApplicationState } from './reducers';
import { initFilmsAction } from './features/films/store/films.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private readonly store = inject(Store<ApplicationState>)

  init(): void {
    this.store.dispatch(initFilmsAction())
  }
}
