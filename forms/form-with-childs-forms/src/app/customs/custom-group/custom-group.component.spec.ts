import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomGroupComponent } from './custom-group.component';

describe('CustomGroupComponent', () => {
  let component: CustomGroupComponent;
  let fixture: ComponentFixture<CustomGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
