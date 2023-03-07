import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticateService } from 'src/app/shared/services/authenticate.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  auth = inject(AuthenticateService);

  constructor() { }

  ngOnInit(): void {

  }


  adminIsOk(): void {

    this.auth.isAdmin = true;
  }
}
