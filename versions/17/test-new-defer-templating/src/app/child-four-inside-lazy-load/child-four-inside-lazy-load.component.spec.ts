import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFourInsideLazyLoadComponent } from './child-four-inside-lazy-load.component';

describe('ChildFourInsideLazyLoadComponent', () => {
  let component: ChildFourInsideLazyLoadComponent;
  let fixture: ComponentFixture<ChildFourInsideLazyLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildFourInsideLazyLoadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildFourInsideLazyLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
