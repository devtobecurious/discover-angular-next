import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WookieComponent } from './wookie.component';

describe('WookieComponent', () => {
  let component: WookieComponent;
  let fixture: ComponentFixture<WookieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WookieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
