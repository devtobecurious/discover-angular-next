import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { Enemy } from '../../../core/models/enemy';
import { EnemyService } from '../../../shared/services/enemies/enemy.service';
import { GameComponent } from './game.component';

class FakeService {
  getAll(): Observable<Enemy[]> {
    return of([
      { type: 'droide', name: 'Droide001' },
      { type: 'droide', name: 'Droide002' },
    ]);
  }
}


describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameComponent ],
      providers: [
        { provide: EnemyService, useValue: FakeService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the current scene background', () => {
    fixture.detectChanges();
    const element = fixture.nativeElement;

    expect(element).toBeTruthy();

    const container = element.querySelector('div.game');
    expect(container).toBeTruthy();

    expect(container.style.backgroundImage).toBe('url("http://www.ewokzone.com/wp-content/uploads/2020/01/endor-1-550x350.jpg")');
    expect(container.style.width).toBe('550px');
    expect(container.style.height).toBe('350px');
  });

  it('should load all enemies in observable', fakeAsync(() => {

    fixture.detectChanges();

    component.enemies$.subscribe(items => {
      expect(items).toBeTruthy();
      expect(items.length).toBe(2);
    });
  }));
});
