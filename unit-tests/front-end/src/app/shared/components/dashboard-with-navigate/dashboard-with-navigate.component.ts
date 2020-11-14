import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-with-navigate',
  templateUrl: './dashboard-with-navigate.component.html',
  styleUrls: ['./dashboard-with-navigate.component.css']
})
export class DashboardWithNavigateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToNextPage(id: number) {
    const url = 'nextUrl/' + id;

    this.router.navigateByUrl(url);
  }

}
