import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WookiesListComponent } from './wookies-list.component';

describe('WookiesListComponent', () => {
  let component: WookiesListComponent;
  let fixture: ComponentFixture<WookiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WookiesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WookiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
