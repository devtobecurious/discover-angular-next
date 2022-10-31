import { ConfigGame } from './../../../shared/data/config-game';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {
  public config$ !: Observable<any>;
  public configSnapshot !: ConfigGame;

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.config$ = this.route.data;
    this.configSnapshot = {
      lifePoints: this.route.snapshot.data["lifePoints"]
    };
  }
}
