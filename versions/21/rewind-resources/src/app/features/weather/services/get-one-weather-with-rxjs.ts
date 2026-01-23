import { inject, Injectable } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RxjsGetWeatherMock } from './__mocks__/rxjs-get-weather-mock';

@Injectable({
  providedIn: 'root',
})
export class GetOneWeatherWithRxjs {
  private readonly mockService = inject(RxjsGetWeatherMock);
  private readonly apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m';
  private readonly weatherResource = rxResource({
    defaultValue: undefined,
    stream: () => this.mockService.getOne()

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
