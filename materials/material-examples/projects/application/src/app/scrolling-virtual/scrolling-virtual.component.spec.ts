import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingVirtualComponent } from './scrolling-virtual.component';

describe('ScrollingVirtualComponent', () => {
  let component: ScrollingVirtualComponent;
  let fixture: ComponentFixture<ScrollingVirtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollingVirtualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollingVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
