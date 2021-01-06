import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarWarsPlayerComponent } from './star-wars-player.component';

describe('StarWarsPlayerComponent', () => {
  let component: StarWarsPlayerComponent;
  let fixture: ComponentFixture<StarWarsPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarWarsPlayerComponent ]
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
});
