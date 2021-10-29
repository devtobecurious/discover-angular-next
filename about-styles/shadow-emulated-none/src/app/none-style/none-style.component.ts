import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-none-style',
  templateUrl: './none-style.component.html',
  styleUrls: ['./none-style.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NoneStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
