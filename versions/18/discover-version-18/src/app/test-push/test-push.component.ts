import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-test-push',
  standalone: true,
  imports: [],
  templateUrl: './test-push.component.html',
  styleUrl: './test-push.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestPushComponent {
  title = 'on push'
  titleSignal = signal<string>('test 2')

  ngOnInit(): void {
    setInterval(() => {
      this.title = 'on push ' + Math.random()
      this.titleSignal.set('test 2 ' + Math.random())
    }, 1000);
  }

  change(): void {
    //this.title = prompt('Enter a new title') || this.title
  }
}
