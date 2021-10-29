import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStyleComponent } from './first-style.component';

describe('FirstStyleComponent', () => {
  let component: FirstStyleComponent;
  let fixture: ComponentFixture<FirstStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
