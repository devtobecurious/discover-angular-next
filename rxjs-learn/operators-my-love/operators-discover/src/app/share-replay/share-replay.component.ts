import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Component({
  selector: 'app-share-replay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.css']
})
export class ShareReplayComponent {
  users$ = inject(HttpClient).get<{ results: {name: string}[]}>('https://swapi.dev/api/people').pipe(shareReplay(1));


}
