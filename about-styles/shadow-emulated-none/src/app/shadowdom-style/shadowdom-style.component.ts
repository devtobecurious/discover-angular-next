import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadowdom-style',
  templateUrl: './shadowdom-style.component.html',
  styleUrls: ['./shadowdom-style.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowdomStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
