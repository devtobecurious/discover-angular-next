import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  private worker : Worker | undefined;
  data = '';
  result = '';

  constructor() {


    if (typeof Worker !== 'undefined') {
      this.worker = new Worker(new URL('./clear-data.worker.ts', import.meta.url), { name: 'clear-data', type: 'module' });
    }
  }
  ngOnDestroy(): void {
    this.worker?.terminate();
  }

  ngOnInit(): void {

  }

  runWorker() {
    if (typeof(this.worker) != 'undefined') {
        this.worker.onmessage = ( {data} ) => {
          this.result = data;

          console.info('1.', data);
        };

        this.worker.onmessage = (ev: MessageEvent) => {
          this.result = ev.data;
          console.info('2.', ev.data);
        }

        this.worker.postMessage(this.data);

        console.info('##########################');
    }
  }

  runNormal() {

  }

}
