import { Component, inject } from '@angular/core';
import { CitySearchStore, CityService, CountrySearchStore } from '../services';
import { filter, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css'
})
export class CitiesComponent {
  private readonly service = inject(CityService);
  cities$ = inject(CountrySearchStore).store$.pipe(filter(key => typeof(key) !== 'undefined' && key !== ''), switchMap(key => this.service.getAll(key)));
  private readonly citySearchStore = inject(CitySearchStore);

  selectNewCity(target: EventTarget | null): void {
    const value = (target as HTMLSelectElement).value;
    this.citySearchStore.store$.next(value);
    console.info('city', value);
  }
}
