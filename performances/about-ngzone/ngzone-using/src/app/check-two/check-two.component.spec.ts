import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckTwoComponent } from './check-two.component';

describe('CheckTwoComponent', () => {
  let component: CheckTwoComponent;
  let fixture: ComponentFixture<CheckTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
