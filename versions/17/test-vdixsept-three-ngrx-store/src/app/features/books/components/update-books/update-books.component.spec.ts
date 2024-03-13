import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBooksComponent } from './update-books.component';

describe('UpdateBooksComponent', () => {
  let component: UpdateBooksComponent;
  let fixture: ComponentFixture<UpdateBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
