import { TestBed } from '@angular/core/testing';

import { RxjsGetWeatherMock } from './rxjs-get-weather-mock';

describe('RxjsGetWeatherMock', () => {
  let service: RxjsGetWeatherMock;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxjsGetWeatherMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
