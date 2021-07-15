import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = { login: '', name: '', password: '', token: ''  };
  loginForm !: FormGroup;

  constructor(private router: Router, private authService: AuthService,
              private formBuilder: FormBuilder) {
    this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {

  }

  clickToLog() {
    this.authService.logIn(this.user).subscribe(item =>
      this.router.navigate(['/'])
    );
  }

}
