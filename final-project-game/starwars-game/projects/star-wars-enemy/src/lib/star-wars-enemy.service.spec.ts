import { TestBed } from '@angular/core/testing';

import { StarWarsEnemyService } from './star-wars-enemy.service';

describe('StarWarsEnemyService', () => {
  let service: StarWarsEnemyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarWarsEnemyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
