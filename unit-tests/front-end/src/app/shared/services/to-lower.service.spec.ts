import { TestBed } from '@angular/core/testing';

import { ToLowerService } from './to-lower.service';

describe('ToLowerService', () => {
  let service: ToLowerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToLowerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
