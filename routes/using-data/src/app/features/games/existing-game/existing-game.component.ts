import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-existing-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './existing-game.component.html',
  styleUrls: ['./existing-game.component.css']
})
export class ExistingGameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
