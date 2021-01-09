import { TestBed } from '@angular/core/testing';

import { WeaponEntityService } from './weapon-entity.service';

describe('WeaponEntityService', () => {
  let service: WeaponEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaponEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
