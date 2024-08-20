import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { hightlight } from 'src/shared/tools/hightlight';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwoComponent implements OnInit {
  // @Input() client !: {name: string, surname: string}

  ngOnInit(): void {
    //this.cd.detach();
    // of([]).subscribe({
    //   next: item => this.cd.markForCheck()
    // })
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
