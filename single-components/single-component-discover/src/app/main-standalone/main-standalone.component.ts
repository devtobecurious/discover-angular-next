import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogService } from '../services/log.service';
import { ChildStandaloneComponent } from '../child-standalone/child-standalone.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ChildStandaloneComponent
  ],
  templateUrl: './main-standalone.component.html',
  styleUrls: ['./main-standalone.component.css']
})
export class MainStandaloneComponent implements OnInit {

  constructor(private log: LogService) { }

  ngOnInit(): void {
    this.log.log('MainStandaloneComponent.ngOnInit()');
  }

}
