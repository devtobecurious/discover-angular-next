import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, combineLatest, concatMap, delay, filter, last, map, of, scan, switchMap, tap, timer } from 'rxjs';
import { CityService, CountryService, WeatherService } from './services';
import { Cities, Weather } from './models';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.css']
})
export class CombineLatestComponent {
  selectCountry$ = new BehaviorSubject<string>('');
  selectCity$ = new BehaviorSubject<string>('');
  citiesStore$ = new BehaviorSubject<Cities>({ total_pages: 0, cities: [] });

  private readonly cityService = inject(CityService);
  countries$ = inject(CountryService).getAll();
  cities$ = this.selectCountry$.pipe(
    filter(country => !!country),
    concatMap(country => this.cityService.getAll(country)),
    tap(item => this.citiesStore$.next(item))
  );

  private readonly weatherService = inject(WeatherService);
  weather$ = combineLatest([
    this.selectCountry$,
    this.selectCity$
  ]).pipe(
    tap(item => console.info('combineLatest', item)),
    switchMap(([countryCode, cityCode]) => {
      let result$: Observable<Weather | null> = of(null);
      if (countryCode && cityCode) {
        const city = this.citiesStore$.value.cities.find(item => item.name === cityCode);
        result$ = this.weatherService.getOne(countryCode, city);
      }

      return result$;
    })
  );

  datesForm = inject(FormBuilder).group({
    startDate: [new Date(), Validators.required],
    endDate: [new Date(), Validators.required]
  });

  private timerOne$ = timer(1000, 4000);
  private timerTwo$ = timer(2000, 4000);
  private timerThree$ = timer(3000, 4000);

  combined$ = combineLatest([
    this.timerOne$,
    this.timerTwo$,
    this.timerThree$
  ],
    (one, two, three) => {
      return '' + one + two + three;
  });

  private weight$ = of(70, 72, 76, 79, 75);
  private height$ = of(1.76, 1.77, 1.78);
  bmi$ = combineLatest([
    this.weight$,
    this.height$
  ], (weight, height) => {
    return { weight: weight, bmi: weight / (height * height)};
  }).pipe(
    scan(
      (acc: {weight: number, bmi: number}[], value:  {weight: number, bmi: number}) => {
        acc.push(value);
        return acc;
      },
      []),
      last()
  );

  validDates$ = combineLatest([
    this.datesForm.get('startDate')!.valueChanges,
    this.datesForm.get('endDate')!.valueChanges,
  ]).pipe(
    tap(([startDate, endDate]) => {
      this.datesForm.get('endDate')!.setErrors(null);
      if (startDate && endDate) {
        if (endDate < startDate) {
          this.datesForm.get('endDate')!.setErrors({ endDateBeforeStartDate: true });
        }
      }
    })
  );

  constructor() {
    this.validDates$.subscribe();
  }

  changeCountry(event: EventTarget | null): void {
    if (event) {
      const countryCode = (event as HTMLSelectElement).value;
      this.selectCity$.next('');
      this.selectCountry$.next(countryCode);
    }
  };

  changeCity(event: EventTarget | null): void {
    if (event) {
      const cityCode = (event as HTMLSelectElement).value;
      this.selectCity$.next(cityCode);
    }
  };

  get endDateBeforeStartDateError(): boolean {
    return this.datesForm.get('endDate')!.hasError('endDateBeforeStartDate');
  }

  get hasErrors(): boolean {
    return this.datesForm.invalid;
  }

}
