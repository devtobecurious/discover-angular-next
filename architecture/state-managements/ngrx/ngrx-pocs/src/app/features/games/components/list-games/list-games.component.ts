import { Component, OnInit, inject } from '@angular/core';
import { GamesBusiness } from '../../services/games.business';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-list-games',
  standalone: true,
  imports: [AsyncPipe], // Standalone api !
  templateUrl: './list-games.component.html',
  styleUrl: './list-games.component.css'
})
export class ListGamesComponent implements OnInit {
  private readonly business = inject(GamesBusiness);
  onlyOnGame$ = this.business.isOnlyOneGame();
  games$ = this.business.getAll(); // Tout le beau du spectacle est ici !
                                   // avec un pipe async <3 !

  ngOnInit(): void {
    this.business.load();
  }

  removeLast(): void {
    this.business.removeLastOne();
  }
}
