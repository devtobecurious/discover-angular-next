import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoComponent } from './meteo.component';

describe('MeteoComponent', () => {
  let component: MeteoComponent;
  let fixture: ComponentFixture<MeteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MeteoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
