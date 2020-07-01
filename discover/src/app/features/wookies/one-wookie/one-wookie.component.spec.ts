import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneWookieComponent } from './one-wookie.component';

describe('OneWookieComponent', () => {
  let component: OneWookieComponent;
  let fixture: ComponentFixture<OneWookieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneWookieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneWookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
