import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverSignalsComponent } from './discover-signals.component';

describe('DiscoverSignalsComponent', () => {
  let component: DiscoverSignalsComponent;
  let fixture: ComponentFixture<DiscoverSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DiscoverSignalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
