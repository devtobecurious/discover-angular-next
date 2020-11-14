import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstEasyComponent } from './first-easy.component';

describe('FirstEasyComponent', () => {
  let component: FirstEasyComponent;
  let fixture: ComponentFixture<FirstEasyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstEasyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstEasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#clicked() should toggle #isOn', () => {
    expect(component.isOn).toBe(false);
    component.clicked();
    expect(component.isOn).toBe(true);
    component.clicked();
    expect(component.isOn).toBe(false);
  });

  it('#clicked() should set message to "isOne"', () => {
    expect(component.message).toMatch(/is off/i);
  });
});
