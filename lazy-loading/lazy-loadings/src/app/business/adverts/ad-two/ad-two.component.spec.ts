import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTwoComponent } from './ad-two.component';

describe('AdTwoComponent', () => {
  let component: AdTwoComponent;
  let fixture: ComponentFixture<AdTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
