import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingDirectiveRepeatingTimesComponent } from './using-directive-repeating-times.component';

describe('UsingDirectiveRepeatingTimesComponent', () => {
  let component: UsingDirectiveRepeatingTimesComponent;
  let fixture: ComponentFixture<UsingDirectiveRepeatingTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingDirectiveRepeatingTimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingDirectiveRepeatingTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
