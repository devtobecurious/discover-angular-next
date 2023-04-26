import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLatestComponent } from './combine-latest.component';

describe('CombineLatestComponent', () => {
  let component: CombineLatestComponent;
  let fixture: ComponentFixture<CombineLatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombineLatestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombineLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
