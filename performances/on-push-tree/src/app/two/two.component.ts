import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { hightlight } from 'src/shared/tools/hightlight';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwoComponent implements OnInit {

  ngOnInit(): void {
    //this.cd.detach();
  }

  constructor(private el: ElementRef, public cd: ChangeDetectorRef) { }

  cdCheck() {
    hightlight('TwoComponent', this.el);
  }

  //does not work for all the cases
  ngDoCheck() {
    console.log('ngDoCheck');
  }

  //does not work for all the cases
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked')
  }

}
