import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipForkForkjoinCombinelatestRaceComponent } from './zip-fork-forkjoin-combinelatest-race.component';

describe('ZipForkForkjoinCombinelatestRaceComponent', () => {
  let component: ZipForkForkjoinCombinelatestRaceComponent;
  let fixture: ComponentFixture<ZipForkForkjoinCombinelatestRaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZipForkForkjoinCombinelatestRaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipForkForkjoinCombinelatestRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
