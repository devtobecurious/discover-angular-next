import { TestBed } from '@angular/core/testing';

import { WookiesService } from './wookies.service';

describe('WookiesService', () => {
  let service: WookiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WookiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
