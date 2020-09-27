import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneOneComponent } from './one-one.component';

describe('OneOneComponent', () => {
  let component: OneOneComponent;
  let fixture: ComponentFixture<OneOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
