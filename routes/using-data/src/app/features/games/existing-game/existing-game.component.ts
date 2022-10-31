import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GameState } from '../models';
import { hasKey } from 'src/app/shared/functions';

@Component({
  selector: 'app-existing-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './existing-game.component.html',
  styleUrls: ['./existing-game.component.css']
})
export class ExistingGameComponent implements OnInit {
  public lastGame !: GameState;

  constructor(private readonly route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    const state = this.location.getState();

    if (typeof state == 'object' && state != null && hasKey('finish', state)) {
      this.lastGame = state as GameState;
    }
  }

}
