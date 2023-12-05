import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CitiesComponent } from '../cities/cities.component';
import { CountriesComponent } from '../countries/countries.component';
import { WeatherWithCountryAndCityService } from '../services';

@Component({
  selector: 'app-weather-loading',
  standalone: true,
  imports: [CommonModule, CitiesComponent, CountriesComponent],
  templateUrl: './weather-loading.component.html',
  styleUrl: './weather-loading.component.css'
})
export class WeatherLoadingComponent {
  weather$ = inject(WeatherWithCountryAndCityService).weather$;
}
