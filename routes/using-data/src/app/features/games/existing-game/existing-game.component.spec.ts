import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingGameComponent } from './existing-game.component';

describe('ExistingGameComponent', () => {
  let component: ExistingGameComponent;
  let fixture: ComponentFixture<ExistingGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ExistingGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExistingGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
