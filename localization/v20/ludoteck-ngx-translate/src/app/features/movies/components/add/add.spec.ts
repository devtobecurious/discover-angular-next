import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Add } from './add';

describe('Add', () => {
  let component: Add;
  let fixture: ComponentFixture<Add>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Add]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Add);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
