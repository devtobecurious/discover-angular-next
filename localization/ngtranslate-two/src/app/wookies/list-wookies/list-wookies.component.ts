import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-list-wookies',
  templateUrl: './list-wookies.component.html',
  styleUrls: ['./list-wookies.component.css']
})
export class ListWookiesComponent implements OnInit {
  items = ['luke', 'leia', 'chewie'];

  constructor() { }

  ngOnInit(): void {
  }

}
