import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneShipComponent } from './one-ship.component';

describe('OneShipComponent', () => {
  let component: OneShipComponent;
  let fixture: ComponentFixture<OneShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneShipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
