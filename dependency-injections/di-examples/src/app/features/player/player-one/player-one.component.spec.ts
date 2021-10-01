import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerOneComponent } from './player-one.component';

describe('PlayerOneComponent', () => {
  let component: PlayerOneComponent;
  let fixture: ComponentFixture<PlayerOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
