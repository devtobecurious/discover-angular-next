import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibSpecialDevtobecuriousComponent } from './my-lib-special-devtobecurious.component';

describe('MyLibSpecialDevtobecuriousComponent', () => {
  let component: MyLibSpecialDevtobecuriousComponent;
  let fixture: ComponentFixture<MyLibSpecialDevtobecuriousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLibSpecialDevtobecuriousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLibSpecialDevtobecuriousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
