import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualStyleComponent } from './virtual-style.component';

describe('VirtualStyleComponent', () => {
  let component: VirtualStyleComponent;
  let fixture: ComponentFixture<VirtualStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
