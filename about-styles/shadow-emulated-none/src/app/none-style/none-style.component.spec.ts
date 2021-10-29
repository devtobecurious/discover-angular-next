import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneStyleComponent } from './none-style.component';

describe('NoneStyleComponent', () => {
  let component: NoneStyleComponent;
  let fixture: ComponentFixture<NoneStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoneStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoneStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
