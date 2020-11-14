import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent, wookie } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise selected event when clicked', () => {
    const theWookie: wookie = { name: 'chewie' };

    component.wookie = theWookie;

    component.selected.subscribe((selected: wookie) => {
      expect(selected).toBeTruthy();
      expect(selected.name).toBeTruthy();
    });

    component.click();
  });
});
