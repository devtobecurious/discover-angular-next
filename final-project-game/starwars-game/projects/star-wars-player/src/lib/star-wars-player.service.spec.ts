import { TestBed } from '@angular/core/testing';

import { StarWarsPlayerService } from './star-wars-player.service';

describe('StarWarsPlayerService', () => {
  let service: StarWarsPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarWarsPlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});
