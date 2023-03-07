import { TestBed } from '@angular/core/testing';

import { MyLibSpecialDevtobecuriousService } from './my-lib-special-devtobecurious.service';

describe('MyLibSpecialDevtobecuriousService', () => {
  let service: MyLibSpecialDevtobecuriousService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLibSpecialDevtobecuriousService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
