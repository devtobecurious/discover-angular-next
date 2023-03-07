import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeUntilSubjectComponent } from './take-until-subject.component';

describe('TakeUntilSubjectComponent', () => {
  let component: TakeUntilSubjectComponent;
  let fixture: ComponentFixture<TakeUntilSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeUntilSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeUntilSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
