import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WookiesComponent } from './wookies.component';

describe('WookiesComponent', () => {
  let component: WookiesComponent;
  let fixture: ComponentFixture<WookiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WookiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
