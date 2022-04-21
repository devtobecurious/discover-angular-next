import { TestBed } from '@angular/core/testing';

import { TileService } from './tile.service';

describe('TileService', () => {
  let service: TileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
