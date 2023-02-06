import { TestBed } from '@angular/core/testing';

import { PeopleDatalayerService } from './people-datalayer.service';

describe('PeopleDatalayerService', () => {
  let service: PeopleDatalayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleDatalayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
