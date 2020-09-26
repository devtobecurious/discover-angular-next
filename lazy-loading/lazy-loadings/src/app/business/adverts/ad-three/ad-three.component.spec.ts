import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdThreeComponent } from './ad-three.component';

describe('AdThreeComponent', () => {
  let component: AdThreeComponent;
  let fixture: ComponentFixture<AdThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
