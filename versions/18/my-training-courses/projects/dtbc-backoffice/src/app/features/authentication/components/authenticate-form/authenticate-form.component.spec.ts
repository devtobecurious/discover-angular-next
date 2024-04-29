import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticateFormComponent } from './authenticate-form.component';

describe('AuthenticateFormComponent', () => {
  let component: AuthenticateFormComponent;
  let fixture: ComponentFixture<AuthenticateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticateFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthenticateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
