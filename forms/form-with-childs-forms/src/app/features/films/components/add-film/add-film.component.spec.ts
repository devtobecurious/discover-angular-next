import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFilmComponent } from './add-film.component';

describe('AddFilmComponent', () => {
  let component: AddFilmComponent;
  let fixture: ComponentFixture<AddFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFilmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
