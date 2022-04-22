import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { PonyModel } from '../models/pony.model';

@Component({
  selector: 'app-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PonyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() ponyModel !: PonyModel;

  check() {
    console.log('pony component view checked');
  }

  getPonyImageUrl() {
    return `images/pony-${this.ponyModel.color}-running.gif`;
  }
}
