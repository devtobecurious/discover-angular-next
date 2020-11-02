import { MyLibComponent, MyLibService } from 'my-lib';
import { state, style, trigger, transition, animate } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'using-share-library';

  @ViewChild(MyLibComponent)
  popin: MyLibComponent;

  constructor(private popupService: MyLibService) {}

  showPopin() {
    console.log('popin', this.popin);
    this.popin.state = 'opened';
  }

  hidePopin() {
    this.popin.state = 'closed';
  }
}
