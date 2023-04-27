import { Component } from '@angular/core';
import { loadService } from './shared/tools/services';
import { concatMap } from 'rxjs';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    NgIf,
    NgFor,
    AsyncPipe
  ]
})
export class AppComponent {
  title = 'lazy-loading';

  planets$ = loadService(() => import('./services/planet.service').then(item => item.PlanetService)).pipe(
    concatMap(service => service.getAll())
  );
}
