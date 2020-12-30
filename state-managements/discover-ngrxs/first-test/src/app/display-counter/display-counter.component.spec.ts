import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCounterComponent } from './display-counter.component';

describe('DisplayCounterComponent', () => {
  let component: DisplayCounterComponent;
  let fixture: ComponentFixture<DisplayCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
