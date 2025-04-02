import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVideoGames } from './table-video-games';

describe('TableVideoGames', () => {
  let component: TableVideoGames;
  let fixture: ComponentFixture<TableVideoGames>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableVideoGames]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableVideoGames);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
