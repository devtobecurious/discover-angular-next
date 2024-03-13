import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSaveOneBooksComponent } from './child-save-one-books.component';

describe('ChildSaveOneBooksComponent', () => {
  let component: ChildSaveOneBooksComponent;
  let fixture: ComponentFixture<ChildSaveOneBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildSaveOneBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildSaveOneBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
