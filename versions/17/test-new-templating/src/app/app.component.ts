import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.info('on init');
  }
  title = 'test-new-templating';
  user = {isHuman: true}
  userUpdate = signal(this.user)
  unBooleen =true;

  listItems = signal<string[]>([]);

  loadItems(): void {
    this.listItems.set([
      "ah",
      "que",
      "johny",
      "!"
    ])
  }

  changeSpecie(): void {
    this.userUpdate.set({isHuman: ! this.userUpdate().isHuman})
  }

  onLog(): void {
    console.info('onLog')
  }

  get isHuman(): boolean {
    return this.user.isHuman;
  }
}
