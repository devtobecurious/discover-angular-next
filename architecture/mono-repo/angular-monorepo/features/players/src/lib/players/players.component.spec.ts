import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayersComponent } from './players.component';
import { table } from 'console';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get list of players', () => {
    const table = fixture.nativeElement.querySelector('table.players')

    console.info(fixture.nativeElement);

    expect(table).toBeTruthy()
  });
});
