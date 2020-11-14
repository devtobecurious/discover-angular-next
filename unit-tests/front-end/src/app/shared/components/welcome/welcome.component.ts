import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  welcome: string;

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.welcome = `Hello ${this.service.user.name}`;
  }

}
