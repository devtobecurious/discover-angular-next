import { Component } from '@angular/core';
import { DiscoverSignalsComponent } from './discover-signals/discover-signals.component';
import { ReadSignalsComponent } from './discover-signals/read-signals/read-signals.component';
import { ListPlanetsComponent } from './features/planets/list-planets/list-planets.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    // DiscoverSignalsComponent,
    // ReadSignalsComponent,
    ListPlanetsComponent
  ]
})
export class AppComponent {
  title = 'discover-seize';
}
