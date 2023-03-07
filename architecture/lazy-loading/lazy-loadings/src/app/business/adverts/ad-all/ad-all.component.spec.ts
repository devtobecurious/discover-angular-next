import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdAllComponent } from './ad-all.component';

describe('AdAllComponent', () => {
  let component: AdAllComponent;
  let fixture: ComponentFixture<AdAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
