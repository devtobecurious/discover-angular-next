import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTwitchGamesComponent } from './list-twitch-games.component';

describe('ListTwitchGamesComponent', () => {
  let component: ListTwitchGamesComponent;
  let fixture: ComponentFixture<ListTwitchGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTwitchGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTwitchGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
