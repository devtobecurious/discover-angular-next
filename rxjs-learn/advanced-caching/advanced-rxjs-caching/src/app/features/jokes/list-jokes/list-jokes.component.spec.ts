import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJokesComponent } from './list-jokes.component';

describe('ListJokesComponent', () => {
  let component: ListJokesComponent;
  let fixture: ComponentFixture<ListJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ListJokesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
