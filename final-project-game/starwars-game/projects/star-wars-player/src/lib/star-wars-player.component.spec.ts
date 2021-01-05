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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
