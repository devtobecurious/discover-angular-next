import { Component, ElementRef, OnInit } from '@angular/core';
import { hightlight } from 'src/shared/tools/hightlight';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
  }

  cdCheck() {
    hightlight(this.el);
  }

}
