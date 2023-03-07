import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishReplayComponent } from './publish-replay.component';

describe('PublishReplayComponent', () => {
  let component: PublishReplayComponent;
  let fixture: ComponentFixture<PublishReplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishReplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishReplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
