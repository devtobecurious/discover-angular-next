import { TestBed } from '@angular/core/testing';

import { GetListVideoGames } from './get-list-video-games';

describe('GetListVideoGames', () => {
  let service: GetListVideoGames;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetListVideoGames);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
