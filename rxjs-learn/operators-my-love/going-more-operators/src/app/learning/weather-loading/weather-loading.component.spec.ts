import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherLoadingComponent } from './weather-loading.component';

describe('WeatherLoadingComponent', () => {
  let component: WeatherLoadingComponent;
  let fixture: ComponentFixture<WeatherLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherLoadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
