import { TestBed } from '@angular/core/testing';

import { TakeUntilService } from './take-until.service';

describe('TakeUntilService', () => {
  let service: TakeUntilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TakeUntilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
