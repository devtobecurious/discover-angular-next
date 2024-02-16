import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryViewchildComponent } from './query-viewchild.component';

describe('QueryViewchildComponent', () => {
  let component: QueryViewchildComponent;
  let fixture: ComponentFixture<QueryViewchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryViewchildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueryViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
