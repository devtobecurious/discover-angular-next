import { TestBed } from '@angular/core/testing';

import { TestOnService } from './test-on-service';

describe('TestOnService', () => {
  let service: TestOnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestOnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
