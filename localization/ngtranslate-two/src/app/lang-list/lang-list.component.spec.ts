import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangListComponent } from './lang-list.component';

describe('LangListComponent', () => {
  let component: LangListComponent;
  let fixture: ComponentFixture<LangListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LangListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
