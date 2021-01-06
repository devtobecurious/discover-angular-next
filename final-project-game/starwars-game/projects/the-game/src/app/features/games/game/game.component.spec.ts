import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameComponent ]
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
});
