import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MovePlayerDirective } from './directives/move-player.directive';
import { StarWarsPlayerComponent } from './star-wars-player.component';

describe('StarWarsPlayerComponent', () => {
  let component: StarWarsPlayerComponent;
  let fixture: ComponentFixture<StarWarsPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarsPlayerComponent, MovePlayerDirective ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarWarsPlayerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should represent a picture of a jedi', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    const div = compiled.querySelector('div.player');
    expect(div).toBeTruthy();

    expect(div.style.backgroundImage).toBeTruthy();
    expect(div.style.width).toBe('24px');
    expect(div.style.height).toBe('34px');
    expect(div.style.position).toBe('absolute');
  });

  it('should get the directive MovePlayerDirective', () => {
    fixture.detectChanges();

    const directives = fixture.debugElement.queryAll(By.directive(MovePlayerDirective));
    expect(directives).toBeTruthy();
    expect(directives.length).toBe(1);
  });

  it('should get the directive MovePlayerDirective and move with it, with one step left', () => {
    fixture.detectChanges();

    const arrowLeft = 'ArrowLeft';
    movePlayer(arrowLeft, 1);

    const compiled = fixture.nativeElement;
    const div = compiled.querySelector('div.player');
    expect(div.style.left).toBe('-1px');
  });

  it('should get the directive MovePlayerDirective and move with it, with one step right', () => {
    fixture.detectChanges();

    const arrowRight = 'ArrowRight';
    movePlayer(arrowRight, 1);

    const compiled = fixture.nativeElement;
    const div = compiled.querySelector('div.player');
    expect(div.style.left).toBe('1px');
  });

  it('should get the directive MovePlayerDirective and should not move', () => {
    fixture.detectChanges();

    const arrowTop = 'ArrowUp';
    movePlayer(arrowTop, 1);

    const compiled = fixture.nativeElement;
    const div = compiled.querySelector('div.player');
    expect(div.style.left).toBe('0px');
  });

  it('should get the directive MovePlayerDirective and move with it, with two step right', () => {
    fixture.detectChanges();

    const arrowRight = 'ArrowRight';
    movePlayer(arrowRight, 2);

    const compiled = fixture.nativeElement;
    const div = compiled.querySelector('div.player');
    expect(div.style.left).toBe('2px');
  });

  function movePlayer(keyCode: string, nbKeyPress: number = 1) {
    for (let i=0; i < nbKeyPress; i++) {
      simulateKeyDown(keyCode);
    }
  }

  function simulateKeyDown(keyCode: string) {
    const escapeEvent: any = document.createEvent('CustomEvent');
    escapeEvent.code = keyCode;
    escapeEvent.initEvent('keydown', true, true);
    document.dispatchEvent(escapeEvent);
  }
});
