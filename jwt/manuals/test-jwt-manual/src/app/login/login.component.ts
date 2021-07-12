import { Component, OnInit } from '@angular/core';
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

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  clickToLog() {
    this.authService.logIn(this.user).subscribe(item =>
      this.router.navigate(['/'])
    );
  }

}
