import { TestBed } from '@angular/core/testing';

import { GetOneWeatherWithRxjs } from './get-one-weather-with-rxjs';

describe('GetOneWeatherWithRxjs', () => {
  let service: GetOneWeatherWithRxjs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetOneWeatherWithRxjs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
