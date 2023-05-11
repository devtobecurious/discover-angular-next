import { CommonModule, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllPlanets } from '../store';
import { loadPlanetsInMemory } from '../store/actions';

@Component({
  selector: 'app-list-planets',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './list-planets.component.html',
  styleUrls: ['./list-planets.component.css']
})
export class ListPlanetsComponent {
  private readonly store = inject(Store);
  readonly planets$$ = this.store.selectSignal(selectAllPlanets);

  loadFromMemory(): void {
    this.store.dispatch(loadPlanetsInMemory({ planets: [ {label: 'Tatooine'}, { label: 'Mustafar'} ] }));
  }
}
