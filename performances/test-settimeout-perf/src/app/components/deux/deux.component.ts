import { Component, OnInit, SimpleChanges } from '@angular/core';
import { logInfo } from 'src/app/shared/utils';

@Component({
  selector: 'app-deux',
  templateUrl: './deux.component.html',
  styleUrls: ['./deux.component.css']
})
export class DeuxComponent implements OnInit {

  constructor() { }

  check(): void {
    console.info('DeuxComponent::check');
  }

  ngOnChanges(changes: SimpleChanges): void {
    logInfo('DeuxComponent: Changes', changes);
  }

  ngOnInit(): void {
    logInfo('DeuxComponent: Init');
  }

}
