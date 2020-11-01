import { TestBed } from '@angular/core/testing';

import { DisplayCharacterGameService } from './display-character-game.service';

describe('DisplayCharacterGameService', () => {
  let service: DisplayCharacterGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayCharacterGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
