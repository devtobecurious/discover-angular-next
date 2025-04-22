import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOne } from './edit-one';

describe('EditOne', () => {
  let component: EditOne;
  let fixture: ComponentFixture<EditOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
