import { Component, ElementRef, OnInit } from '@angular/core';
import { hightlight } from 'src/shared/tools/hightlight';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  constructor(private el: ElementRef) { }
  cdCheck() {
    hightlight(this.el);
  }

  ngOnInit(): void {
  }

}
