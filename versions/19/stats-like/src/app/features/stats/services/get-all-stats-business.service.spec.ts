import { TestBed } from '@angular/core/testing';

import { GetAllStatsBusinessService } from './get-all-stats-business.service';

describe('GetAllStatsBusinessService', () => {
  let service: GetAllStatsBusinessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllStatsBusinessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
