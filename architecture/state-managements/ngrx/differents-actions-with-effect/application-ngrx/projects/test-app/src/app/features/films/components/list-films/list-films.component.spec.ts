import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFilmsComponent } from './list-films.component';

describe('ListFilmsComponent', () => {
  let component: ListFilmsComponent;
  let fixture: ComponentFixture<ListFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFilmsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
