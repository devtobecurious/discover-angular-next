import { TestBed } from '@angular/core/testing';

import { DroidesAnimationService } from './droides-animation.service';

describe('DroidesAnimationService', () => {
  let service: DroidesAnimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DroidesAnimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
