import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCharacterGameComponent } from './display-character-game.component';

describe('DisplayCharacterGameComponent', () => {
  let component: DisplayCharacterGameComponent;
  let fixture: ComponentFixture<DisplayCharacterGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCharacterGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCharacterGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
