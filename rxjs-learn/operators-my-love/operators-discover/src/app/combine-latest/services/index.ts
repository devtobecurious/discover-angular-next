import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, concatMap, delay, last, map, of, range, scan, tap } from "rxjs";
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
    return this.getAllPerPage(countryCode)
    .pipe(
      concatMap(item => {
        return range(2, item.total_pages).pipe(
          concatMap(page => of(page).pipe(delay(2000))),
          concatMap(page => this.getAllPerPage(countryCode, page + 1)),
        );
      }),

      scan((history: Cities, current: Cities) => {
        history.total_pages = current.total_pages;
        history.cities = [...history.cities, ...current.cities];

        return history;
      }, { total_pages: 0, cities: [] } as Cities),
      last()
    );
  }

  getAllPerPage(countryCode: string, page = 1): Observable<Cities> {
    const apiUrl = `https://countries-cities.p.rapidapi.com/location/country/${countryCode}/city/list?page=${page}&per_page=20`;
    return this.httpClient.get<Cities>(apiUrl, { headers });
  }
}
