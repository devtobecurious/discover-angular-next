import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { hightlight } from 'src/shared/tools/hightlight';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
  changeDetection: ChangeDetectionStrategy.Default // Put push to see the changes
})
export class TwoComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private el: ElementRef, public cd: ChangeDetectorRef) {}

  cdCheck() {
    hightlight(this.el);
  }

  //does not work for all the cases
  ngDoCheck() {
    console.log('ngDoCheck')
  }

  //does not work for all the cases
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked')
  }

}
