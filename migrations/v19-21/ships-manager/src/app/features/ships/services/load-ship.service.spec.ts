import { TestBed } from '@angular/core/testing';

import { LoadShipService } from './load-ship.service';

describe('LoadShipService', () => {
  let service: LoadShipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadShipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
