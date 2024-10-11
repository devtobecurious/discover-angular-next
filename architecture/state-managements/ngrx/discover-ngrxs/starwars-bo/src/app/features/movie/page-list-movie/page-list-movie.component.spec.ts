import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListMovieComponent } from './page-list-movie.component';

describe('PageListMovieComponent', () => {
  let component: PageListMovieComponent;
  let fixture: ComponentFixture<PageListMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
