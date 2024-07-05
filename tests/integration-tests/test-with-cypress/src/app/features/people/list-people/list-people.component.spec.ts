import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPeopleComponent } from './list-people.component';

describe('ListPeopleComponent', () => {
  let component: ListPeopleComponent;
  let fixture: ComponentFixture<ListPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPeopleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
