import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherResponseApi } from '../../models/weather';

@Injectable({
  providedIn: 'root',
})
export class RxjsGetWeatherMock {
    private readonly weather$ = new Observable<WeatherResponseApi>(subscriber => {
      const mockData: WeatherResponseApi = {
        current: {
          time: '2024-01-01T12:00:00Z',
          temperature_2m: 20,
          wind_speed_10m: 15
        }
      };
      subscriber.next(mockData);

      setTimeout(() => {
        const mockData: WeatherResponseApi = {
          current: {
            time: '2024-01-03T12:00:00Z',
            temperature_2m: -5,
            wind_speed_10m: 90
          }
        };
        subscriber.next(mockData);
        subscriber.complete();
      }, 1500);
    })

    getOne() {
      return this.weather$;
    }
}
