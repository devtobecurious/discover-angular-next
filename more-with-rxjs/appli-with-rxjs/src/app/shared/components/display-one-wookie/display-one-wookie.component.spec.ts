import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayOneWookieComponent } from './display-one-wookie.component';

describe('DisplayOneWookieComponent', () => {
  let component: DisplayOneWookieComponent;
  let fixture: ComponentFixture<DisplayOneWookieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayOneWookieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayOneWookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
