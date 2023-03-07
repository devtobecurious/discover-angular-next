import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdOrHotComponent } from './cold-or-hot.component';

describe('ColdOrHotComponent', () => {
  let component: ColdOrHotComponent;
  let fixture: ComponentFixture<ColdOrHotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColdOrHotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdOrHotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
