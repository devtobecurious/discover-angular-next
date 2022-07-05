import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-child-standalone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-standalone.component.html',
  styleUrls: ['./child-standalone.component.css'],
  providers: [LogService]
})
export class ChildStandaloneComponent implements OnInit {

  constructor(private log: LogService) { }

  ngOnInit(): void {
  }

}
