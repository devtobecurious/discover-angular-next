import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDisplayComponent } from './dialog-display.component';

describe('DialogDisplayComponent', () => {
  let component: DialogDisplayComponent;
  let fixture: ComponentFixture<DialogDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
