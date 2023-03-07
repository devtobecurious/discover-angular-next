import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetterClickComponent } from './better-click.component';

describe('BetterClickComponent', () => {
  let component: BetterClickComponent;
  let fixture: ComponentFixture<BetterClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BetterClickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetterClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
