import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdOneComponent } from './ad-one.component';

describe('AdOneComponent', () => {
  let component: AdOneComponent;
  let fixture: ComponentFixture<AdOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
