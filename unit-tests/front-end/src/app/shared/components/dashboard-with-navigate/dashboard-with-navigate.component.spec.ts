import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { DashboardWithNavigateComponent } from './dashboard-with-navigate.component';

describe('DashboardWithNavigateComponent', () => {
  let component: DashboardWithNavigateComponent;
  let fixture: ComponentFixture<DashboardWithNavigateComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardWithNavigateComponent ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardWithNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should tell router to navigate when clicked', () => {
    component.goToNextPage(1);

    const spy = routerSpy.navigateByUrl as jasmine.Spy;
    const args = spy.calls.first().args[0];

    expect(args).toBe('nextUrl/' + 1);
  });
});
