import { TestBed } from '@angular/core/testing';

import { GetAllVideoGames } from './get-all-video-games';

describe('GetAllVideoGames', () => {
  let service: GetAllVideoGames;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllVideoGames);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
