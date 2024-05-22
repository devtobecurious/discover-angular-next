import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOneBisComponent } from './child-one-bis.component';

describe('ChildOneBisComponent', () => {
  let component: ChildOneBisComponent;
  let fixture: ComponentFixture<ChildOneBisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildOneBisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildOneBisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
