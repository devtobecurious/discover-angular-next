import { Component, OnInit, SimpleChanges } from '@angular/core';
import { logInfo } from 'src/app/shared/utils';

@Component({
  selector: 'app-trois',
  templateUrl: './trois.component.html',
  styleUrls: ['./trois.component.css']
})
export class TroisComponent implements OnInit {

  constructor() { }

  check(): void {
    console.info('TroisComponent::check');
  }

  ngAfterViewInit(): void {
    console.info('TroisComponent::ngAfterViewInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    logInfo('TroisComponent: Changes', changes);
  }

  ngOnInit(): void {
    logInfo('TroisComponent: Init');
  }

}
