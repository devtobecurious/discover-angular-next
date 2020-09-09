import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeStatesWildcardComponent } from './three-states-wildcard.component';

describe('ThreeStatesWildcardComponent', () => {
  let component: ThreeStatesWildcardComponent;
  let fixture: ComponentFixture<ThreeStatesWildcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeStatesWildcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeStatesWildcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
