import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastermindGridComponent } from './mastermind-grid.component';

describe('MastermindGridComponent', () => {
  let component: MastermindGridComponent;
  let fixture: ComponentFixture<MastermindGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MastermindGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MastermindGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
