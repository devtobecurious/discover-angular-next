import { Component, HostListener, Input, OnInit } from '@angular/core';
import { DroidesAnimationService } from '../../../shared/services/droides-animation.service';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.sass']
})
export class DisplayComponent implements OnInit {
  @Input()
  currentX = 0;

  @Input()
  currentY = 0;

  constructor(private droideAnimationsService: DroidesAnimationService) { }

  ngOnInit(): void {
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent): void {
    console.log('Presskey', event);

    if (event.code === 'ArrowRight') {
      this.currentX += 10;
    }

    if (event.code === 'ArrowLeft') {
      this.currentX -= 10;
    }

    if (event.code === 'ArrowDown') {
      this.currentY += 10;
    }

    if (event.code === 'ArrowUp') {
      this.currentY -= 10;
    }
  }



}
