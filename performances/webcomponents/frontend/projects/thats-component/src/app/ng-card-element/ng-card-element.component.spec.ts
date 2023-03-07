import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCardElementComponent } from './ng-card-element.component';

describe('NgCardElementComponent', () => {
  let component: NgCardElementComponent;
  let fixture: ComponentFixture<NgCardElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgCardElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCardElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
