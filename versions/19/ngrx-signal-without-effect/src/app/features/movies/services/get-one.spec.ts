import { TestBed } from '@angular/core/testing';

import { GetOne } from './get-one';

describe('GetOne', () => {
  let service: GetOne;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetOne);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
