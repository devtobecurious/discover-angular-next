import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareReplayComponent } from './share-replay.component';

describe('ShareReplayComponent', () => {
  let component: ShareReplayComponent;
  let fixture: ComponentFixture<ShareReplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareReplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareReplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
