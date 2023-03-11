import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JOKES_LIST, provideGetJokesList } from '../services/jokes';
import { Joke } from '../models';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-list-jokes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-jokes.component.html',
  styleUrls: ['./list-jokes.component.css'],
  providers: [provideGetJokesList()]
})
export class ListJokesComponent {
  jokes$ = inject(JOKES_LIST)();
}
