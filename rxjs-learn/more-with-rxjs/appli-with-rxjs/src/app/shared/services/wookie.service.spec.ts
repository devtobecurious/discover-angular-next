import { TestBed } from '@angular/core/testing';

import { WookieService } from './wookie.service';

describe('WookieService', () => {
  let service: WookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WookieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
