import { TestBed } from '@angular/core/testing';

import { ComponentsTestService } from './components-test.service';

describe('ComponentsTestService', () => {
  let service: ComponentsTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentsTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
