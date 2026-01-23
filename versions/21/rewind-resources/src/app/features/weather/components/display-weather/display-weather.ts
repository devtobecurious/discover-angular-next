import { Component, inject } from '@angular/core';
import { GetOneWeather } from '../../services/get-one-weather';
import { GetOneWeatherWithRxjs } from '../../services/get-one-weather-with-rxjs';

@Component({
  selector: 'app-display-weather',
  templateUrl: './display-weather.html',
  styleUrl: './display-weather.css',
})
export class DisplayWeather {
  //private readonly weatherService = inject(GetOneWeather);
  private readonly weatherService = inject(GetOneWeatherWithRxjs);
  data = this.weatherService.data;
  loading = this.weatherService.loading;
  error = this.weatherService.error;
}
