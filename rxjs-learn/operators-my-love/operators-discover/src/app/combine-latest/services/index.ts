import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, map, of, tap } from "rxjs";
import { ApiCountries, ApiWeather, Cities, City, Countries, Weather } from "../models";

const headers = {
  'content-type': 'application/octet-stream',
  'X-RapidAPI-Key': 'e9f75626a5msh9d6863bdde79b2fp199f45jsn1ec381f87dd5',
  'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
};

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private readonly httpClient = inject(HttpClient);

  getOne(country: string, city: City | undefined): Observable<Weather | null> {
    let result: Observable<Weather | null> = of(null);

    if (city) {
      const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`;
      result = this.httpClient.get<ApiWeather>(apiUrl).pipe(
        map(item =>
           ({
            temperature: item.current_weather.temperature,
            wind: {
              speed: item.current_weather.windspeed,
              direction: item.current_weather.winddirection
            },
            code: item.current_weather.weathercode
          })
        )
      );
    }

    return result;
  }
}

@Injectable({ providedIn: 'root' })
export class CountryService {
  private readonly apiUrl = 'https://countries-cities.p.rapidapi.com/location/country/list';
  private readonly httpClient = inject(HttpClient);

  getAll(): Observable<Countries> {
    return this.httpClient.get<ApiCountries>(this.apiUrl, { headers }).pipe(tap(item => console.info('coutries', item))).pipe(
      map(item => {
        const result: Countries = { countries: [] };

        for (const key in item.countries) {
          if (item.countries.hasOwnProperty(key)) {
            result.countries.push({ code: key, name: item.countries[key] });
          }
        }
        result.countries = [...result.countries].sort((a, b) => a.name > b.name ? 1 : -1);

        return result;
      })
    );
  }
}

@Injectable({ providedIn: 'root' })
export class CityService {
  private readonly httpClient = inject(HttpClient);

  getAll(countryCode: string): Observable<Cities> {
    const apiUrl = `https://countries-cities.p.rapidapi.com/location/country/${countryCode}/city/list?page=1&per_page=100`;
    return this.httpClient.get<Cities>(apiUrl, { headers });
  }
}
