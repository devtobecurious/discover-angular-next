import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowdomStyleComponent } from './shadowdom-style.component';

describe('ShadowdomStyleComponent', () => {
  let component: ShadowdomStyleComponent;
  let fixture: ComponentFixture<ShadowdomStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadowdomStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowdomStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
