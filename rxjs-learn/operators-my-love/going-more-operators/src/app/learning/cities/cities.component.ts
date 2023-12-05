import { Component, inject } from '@angular/core';
import { CitySearchStore, CityService, CountrySearchStore } from '../services';
import { filter, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [AsyncPipe, FormsModule],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css'
})
export class CitiesComponent {
  cityId = '';
  private readonly service = inject(CityService);
  cities$ = inject(CountrySearchStore).store$.pipe(filter(key => typeof(key) !== 'undefined' && key !== ''), switchMap(key => this.service.getAll(key)));
  private readonly citySearchStore = inject(CitySearchStore);

  selectNewCity(id: string): void {
    const value = id;
    this.citySearchStore.store$.next(value);
    console.info('city', value);
  }
}
