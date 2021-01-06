import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnemyType } from './models/enemy-type';
import { StarWarsEnemyComponent } from './star-wars-enemy.component';
import imageUrls from './models/images-urls';

describe('StarWarsEnemyComponent', () => {
  let component: StarWarsEnemyComponent;
  let fixture: ComponentFixture<StarWarsEnemyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarsEnemyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarsEnemyComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should appear as droid', () => {
    component.type = EnemyType.droid;
    shouldAppear(0);
    expect(component.type).toBe(EnemyType.droid);
  });

  it('should appear as trooper', () => {
    component.type = EnemyType.trooper;
    shouldAppear(1);
    expect(component.type).toBe(EnemyType.trooper);
  });

  it('should move to 1px on right', () => {
    moveAsExpected(1);
  });

  it('should move to 1px on left', () => {
    moveAsExpected(-1);
  });

  function moveAsExpected(step: number) {
    component.coordinate.x = step;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const div = getCurrentDiv(compiled);

    expect(div.style.left).toBe(step + 'px');
  }

  function getCurrentDiv(compiled) {
    const div = compiled.querySelector('div.enemy');
    expect(div).toBeTruthy();

    return div;
  }

  function shouldAppear(imageUrlIndex: number = 0) {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    const div = getCurrentDiv(compiled);

    expect(div.style.width).toBe('42px');
    expect(div.style.height).toBe('55px');
    expect(div.style.position).toBe('absolute');

    const backgroundImage = div.style.backgroundImage;
    expect(backgroundImage).toBeTruthy();
    expect(backgroundImage).toBe(`url("${imageUrls[imageUrlIndex]}")`);
  }
});
