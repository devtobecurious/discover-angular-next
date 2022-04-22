import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() src !: string;

  check() {
      console.log('image component view checked');
  }

}
