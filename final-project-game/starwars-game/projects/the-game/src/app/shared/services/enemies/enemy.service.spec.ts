import { TestBed } from '@angular/core/testing';

import { EnemyService } from './enemy.service';

describe('EnemyService', () => {
  let service: EnemyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnemyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
