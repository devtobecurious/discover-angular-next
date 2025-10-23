import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOneGameSession } from './create-one-game-session';

describe('CreateOneGameSession', () => {
  let component: CreateOneGameSession;
  let fixture: ComponentFixture<CreateOneGameSession>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOneGameSession]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOneGameSession);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
