import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchGameMainPageComponent } from './twitch-game-main-page.component';

describe('TwitchGameMainPageComponent', () => {
  let component: TwitchGameMainPageComponent;
  let fixture: ComponentFixture<TwitchGameMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitchGameMainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwitchGameMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
