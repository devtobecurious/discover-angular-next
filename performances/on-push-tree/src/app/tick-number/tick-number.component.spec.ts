import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickNumberComponent } from './tick-number.component';

describe('TickNumberComponent', () => {
  let component: TickNumberComponent;
  let fixture: ComponentFixture<TickNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TickNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TickNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
