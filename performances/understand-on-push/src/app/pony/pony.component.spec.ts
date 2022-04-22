import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonyComponent } from './pony.component';

describe('PonyComponent', () => {
  let component: PonyComponent;
  let fixture: ComponentFixture<PonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PonyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
