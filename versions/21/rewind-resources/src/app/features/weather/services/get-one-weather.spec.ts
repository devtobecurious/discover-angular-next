import { TestBed } from '@angular/core/testing';

import { GetOneWeather } from './get-one-weather';

describe('GetOneWeather', () => {
  let service: GetOneWeather;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetOneWeather);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
