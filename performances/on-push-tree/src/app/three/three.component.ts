import { ChangeDetectionStrategy, Component, ElementRef, OnInit } from '@angular/core';
import { hightlight } from 'src/shared/tools/hightlight';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreeComponent implements OnInit {

  constructor(private el: ElementRef) { }
  cdCheck() {
    hightlight('ThreeComponent', this.el);
  }

  ngOnInit(): void {
  }

}
