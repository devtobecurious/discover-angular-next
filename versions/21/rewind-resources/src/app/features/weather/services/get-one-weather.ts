import { Injectable, resource } from '@angular/core';
import { WeatherResponseApi } from '../models/weather';

@Injectable({
  providedIn: 'root',
})
export class GetOneWeather {
  private readonly apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m';
  private readonly weatherResource = resource({
    defaultValue: undefined,

    loader: async () => {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      return await response.json() as WeatherResponseApi;
    }
  })


  get loading() {
    return this.weatherResource.isLoading;
  }

  get data() {
    return this.weatherResource.value;
  }

  get error() {
    return this.weatherResource.error;
  }
}
