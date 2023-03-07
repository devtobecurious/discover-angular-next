import { TestBed } from '@angular/core/testing';

import { TestSingletonService } from './test-singleton.service';

describe('TestSingletonService', () => {
  let service: TestSingletonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestSingletonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
