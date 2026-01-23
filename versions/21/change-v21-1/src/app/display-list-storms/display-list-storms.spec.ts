import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayListStorms } from './display-list-storms';

describe('DisplayListStorms', () => {
  let component: DisplayListStorms;
  let fixture: ComponentFixture<DisplayListStorms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayListStorms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayListStorms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
