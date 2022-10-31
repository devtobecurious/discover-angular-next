import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManagerComponent } from './admin-manager.component';

describe('AdminManagerComponent', () => {
  let component: AdminManagerComponent;
  let fixture: ComponentFixture<AdminManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AdminManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
