import { Component, input, output } from '@angular/core';
import { VideoGame } from '../../models/video-game';

@Component({
  selector: 'ldk-table-video-games',
  templateUrl: './table-video-games.ng.html',
  styleUrl: './table-video-games.css'
})
export class TableVideoGames {
  items = input.required<VideoGame[]>()
  toEdit = output<VideoGame>()

  clickToEdit(item: VideoGame): void {
    this.toEdit.emit(item)
  }
}
