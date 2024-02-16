import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTestComponent } from './input-test.component';

describe('InputTestComponent', () => {
  let component: InputTestComponent;
  let fixture: ComponentFixture<InputTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
