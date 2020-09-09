import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithCallbackComponent } from './with-callback.component';

describe('WithCallbackComponent', () => {
  let component: WithCallbackComponent;
  let fixture: ComponentFixture<WithCallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithCallbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
