import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginService } from 'src/app/shared/services/authenticates/login.service';
import { AuthenticationActions } from '../store/actions/actions-types';
import { ApplicationState } from '../../../core/store/reducers';

declare var M: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  loginForm: FormGroup;

  constructor(private loginService: LoginService,
              private formBuilder: FormBuilder,
              private store: Store<ApplicationState>,
              private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['evan@boissonnot.fr', [Validators.required]],
      password: ['', [Validators.required]]
    })
   }

   ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    M.updateTextFields();
  }

  login(): void {
    this.loginService.connect(this.loginForm.value)
                     .subscribe(item => {
                       this.store.dispatch(AuthenticationActions.login({user: item}));
                       this.router.navigateByUrl('/wookies');
                      });
  }

}
