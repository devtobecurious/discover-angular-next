import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WookiesSidebarComponent } from './wookies-sidebar.component';

describe('WookiesSidebarComponent', () => {
  let component: WookiesSidebarComponent;
  let fixture: ComponentFixture<WookiesSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WookiesSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WookiesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
