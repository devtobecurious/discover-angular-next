import { Component, OnInit } from '@angular/core';
import { userProvider } from 'src/app/shared/services/player-service.provider';
import { PlayerService } from 'src/app/shared/services/player.service';

@Component({
  selector: 'app-player-one',
  templateUrl: './player-one.component.html',
  styleUrls: ['./player-one.component.css'],
  providers: [
    userProvider
  ]
})
export class PlayerOneComponent implements OnInit {

  constructor(private service: PlayerService) { }

  ngOnInit(): void {
  }

}
