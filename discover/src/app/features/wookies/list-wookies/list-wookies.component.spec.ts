import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWookiesComponent } from './list-wookies.component';

describe('ListWookiesComponent', () => {
  let component: ListWookiesComponent;
  let fixture: ComponentFixture<ListWookiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWookiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
