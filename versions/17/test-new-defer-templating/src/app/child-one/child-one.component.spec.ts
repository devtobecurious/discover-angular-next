import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOneComponent } from './child-one.component';

describe('ChildOneComponent', () => {
  let component: ChildOneComponent;
  let fixture: ComponentFixture<ChildOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
