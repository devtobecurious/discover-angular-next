import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStandaloneComponent } from './main-standalone.component';

describe('MainStandaloneComponent', () => {
  let component: MainStandaloneComponent;
  let fixture: ComponentFixture<MainStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MainStandaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
