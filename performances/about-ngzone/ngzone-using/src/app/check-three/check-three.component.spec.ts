import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckThreeComponent } from './check-three.component';

describe('CheckThreeComponent', () => {
  let component: CheckThreeComponent;
  let fixture: ComponentFixture<CheckThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
