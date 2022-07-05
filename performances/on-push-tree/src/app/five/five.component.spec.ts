import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveComponent } from './five.component';

describe('FiveComponent', () => {
  let component: FiveComponent;
  let fixture: ComponentFixture<FiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
