import { TestBed } from '@angular/core/testing';

import { AuthenticateGuard } from './authenticate.guard';

describe('AuthenticateGuard', () => {
  let guard: AuthenticateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenticateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
