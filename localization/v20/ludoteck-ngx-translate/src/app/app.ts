import { DatePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { List } from './features/movies/components/list/list'
import { Add } from './features/movies/components/add/add';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe, List, Add],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  who = signal('boy');
  title = signal($localize`Hello ${this.who()} !`)

  girl = $localize`:site h3|girl way:Hello girl`

  count = signal(0);

  add(n: number) {
    this.count.update(c => c + n);
  }

changeToggle() {
  this.toggle.update(tog => !tog);
}
  today = signal(new Date());

  toggle = signal(false);
  toggleAriaLabel = computed(() => {
    return this.toggle()
      ? $localize`:Toggle Button|A button to toggle status:Show`
      : $localize`:Toggle Button|A button to toggle status:Hide`;
  });
}
