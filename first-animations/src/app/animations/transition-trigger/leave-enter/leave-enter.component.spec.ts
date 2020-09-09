import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveEnterComponent } from './leave-enter.component';

describe('LeaveEnterComponent', () => {
  let component: LeaveEnterComponent;
  let fixture: ComponentFixture<LeaveEnterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveEnterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
