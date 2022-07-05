import { Component, ElementRef, OnInit } from '@angular/core';
import { hightlight } from 'src/shared/tools/hightlight';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit {

  constructor(private el: ElementRef) { }
  cdCheck() {
    hightlight(this.el);
  }

  ngOnInit(): void {
  }

}
