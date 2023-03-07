import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WookieEditComponent } from './wookie-edit.component';

describe('WookieEditComponent', () => {
  let component: WookieEditComponent;
  let fixture: ComponentFixture<WookieEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WookieEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WookieEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
