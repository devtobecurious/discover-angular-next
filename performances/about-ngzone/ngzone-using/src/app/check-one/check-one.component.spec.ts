import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOneComponent } from './check-one.component';

describe('CheckOneComponent', () => {
  let component: CheckOneComponent;
  let fixture: ComponentFixture<CheckOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
