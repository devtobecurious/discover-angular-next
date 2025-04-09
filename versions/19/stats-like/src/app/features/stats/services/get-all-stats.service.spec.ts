import { TestBed } from '@angular/core/testing';

import { GetAllStatsService } from './get-all-stats.service';

describe('GetAllStatsService', () => {
  let service: GetAllStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
