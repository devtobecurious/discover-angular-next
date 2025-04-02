import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVideoGames } from './list-video-games';

describe('ListVideoGames', () => {
  let component: ListVideoGames;
  let fixture: ComponentFixture<ListVideoGames>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListVideoGames]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVideoGames);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
