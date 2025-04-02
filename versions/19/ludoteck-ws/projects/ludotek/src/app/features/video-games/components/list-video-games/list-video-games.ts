import { Component, inject, signal } from '@angular/core';
import { GetAllVideoGames } from '../../services/get-all-video-games';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { TableVideoGames } from '../table-video-games/table-video-games';
import { VideoGame } from '../../models/video-game';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ldk-list-video-games',
  templateUrl: './list-video-games.ng.html',
  styleUrl: './list-video-games.css',
  imports: [AsyncPipe, TableVideoGames, FormsModule, JsonPipe]
})
export class ListVideoGames {
  private readonly service = inject(GetAllVideoGames)
  videoGamesResult$ = this.service.getAll() // aucun appel
  title = signal('Mes jeux-vidéos')

  videoGameToBeEditable = signal<VideoGame | null | undefined>(undefined)

  changeTitle(): void {
    this.title.set('Mes jeux-vidéos (3)')
  }

  editOne(item: VideoGame): void {
    this.videoGameToBeEditable.set(item)
  }

  saveOne(item: VideoGame): void {
    console.log('save to http web api')
  }
}
