import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../../services/user.service';

import { WelcomeComponent } from './welcome.component';

class FakeUseService {
  isLoggedIn = true;
  user = { name: 'Han solo' };
}

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let service: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ],
      providers: [
        { provide: UserService, useClass: FakeUseService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;


    service = TestBed.inject(UserService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(service).toBeTruthy();
  });

  it('shoud message be undefined', () => {
    expect(component.welcome).toBeUndefined();
  });

  it('should welcome logged in in user, after ngOnInit', () => {
    component.ngOnInit();
    expect(component.welcome).toContain(service.user.name);
  });
});
