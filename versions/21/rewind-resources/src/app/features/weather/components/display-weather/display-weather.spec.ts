import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWeather } from './display-weather';

describe('DisplayWeather', () => {
  let component: DisplayWeather;
  let fixture: ComponentFixture<DisplayWeather>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayWeather]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayWeather);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
