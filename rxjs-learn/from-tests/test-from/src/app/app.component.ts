import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { concatMap, from, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-from';

  ngOnInit(): void {
    const obs$  = from(fetch('https://swapi.dev/api/people').then(item => item.json()))
                  .pipe(
                    tap(result => console.info('TAP - people', result)),
                    concatMap(result => fetch('https://swapi.dev/api/films').then(item => item.json())),
                    tap(result => console.info('TAP - film', result)),
                  );

    obs$.subscribe({
      next: item => console.info('next', item),
      complete: () => console.info('END')
    });
  }
}
