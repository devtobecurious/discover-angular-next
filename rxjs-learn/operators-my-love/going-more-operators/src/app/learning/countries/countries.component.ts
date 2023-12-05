import { Component, inject } from '@angular/core';
import { CountrySearchStore, CountryService } from '../services';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent {
  countries$ = inject(CountryService).getAll();
  private readonly searchCountryStore = inject(CountrySearchStore);

  selectNewCountry(target: EventTarget | null): void {
    if (target) {
      const value = (target as HTMLSelectElement).value;
      this.searchCountryStore.store$.next(value);
      console.info('country', value);
    }
  }
}
