import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakpointObserverComponent } from './breakpoint-observer.component';

describe('BreakpointObserverComponent', () => {
  let component: BreakpointObserverComponent;
  let fixture: ComponentFixture<BreakpointObserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakpointObserverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakpointObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
