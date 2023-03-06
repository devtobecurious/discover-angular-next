import { ChangeDetectionStrategy, Component, NgZone, inject } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush => if we activate this line => progress value not update the template
})
export class ProgressComponent {
  private readonly ngZone = inject(NgZone);
  private timeOutId !: number;
  progressValue = 0;

  processInZone(): void {
   this.cancel();

    this.increase(() => alert('done'));
  }

  processOutZone(): void {
    this.cancel();

    this.ngZone.runOutsideAngular(() => {
      this.increase(() => {
        this.ngZone.run(() => console.log('done'));
      });
    });
  }

  cancel(): void {
    clearTimeout(this.timeOutId);
    this.progressValue = 0;
  }

  private increase(done: () => void): void {
    this.progressValue += 1;

    if (this.progressValue < 100) {
      this.timeOutId = window.setTimeout(() => this.increase(done), 100);
    } else {
      done();
    }
  }
}
