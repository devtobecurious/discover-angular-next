import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { getMoviesWithCharacters } from './services';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-prom-rxjs';

  movies$ = getMoviesWithCharacters();
}
