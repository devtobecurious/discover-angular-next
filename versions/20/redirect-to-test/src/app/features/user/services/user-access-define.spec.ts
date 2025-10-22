import { TestBed } from '@angular/core/testing';

import { UserAccessDefine } from './user-access-define';

describe('UserAccessDefine', () => {
  let service: UserAccessDefine;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAccessDefine);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
