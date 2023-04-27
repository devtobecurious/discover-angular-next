import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildWithTitleComponent } from './child-with-title.component';

describe('ChildWithTitleComponent', () => {
  let component: ChildWithTitleComponent;
  let fixture: ComponentFixture<ChildWithTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChildWithTitleComponent]
    });
    fixture = TestBed.createComponent(ChildWithTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
