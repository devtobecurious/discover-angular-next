import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNotstandaloneComponent } from './main-notstandalone.component';

describe('MainNotstandaloneComponent', () => {
  let component: MainNotstandaloneComponent;
  let fixture: ComponentFixture<MainNotstandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNotstandaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainNotstandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
