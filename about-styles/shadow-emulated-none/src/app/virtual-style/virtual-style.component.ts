import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-virtual-style',
  templateUrl: './virtual-style.component.html',
  styleUrls: ['./virtual-style.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class VirtualStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
