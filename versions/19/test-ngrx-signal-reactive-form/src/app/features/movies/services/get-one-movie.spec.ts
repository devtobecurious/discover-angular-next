import { TestBed } from '@angular/core/testing';

import { GetOneMovie } from './get-one-movie';

describe('GetOneMovie', () => {
  let service: GetOneMovie;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetOneMovie);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
