import { TestBed } from '@angular/core/testing';

import { GetAllMovies } from './get-all-movies';

describe('GetAllMovies', () => {
  let service: GetAllMovies;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllMovies);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
