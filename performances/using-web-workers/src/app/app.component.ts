import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'using-web-workers';

  public number;
  public output;
  private worker: Worker;

  constructor() {
  }

  ngOnDestroy(): void {
    this.worker.terminate();
  }

  ngOnInit(): void {
    if (typeof Worker !== 'undefined') {
      const self = this;
      this.worker = new Worker('./my-web-worker.worker', { type: 'module' });
      this.worker.onmessage = function(data) {
        self.output = data.data;
      };
    }   
  }

  calcFib() {
    this.output = fibonacci(this.number);
  }
 
  calcFibWorker() {
    this.worker.postMessage(this.number);
  }
}

function fibonacci(num) {
  if (num == 1 || num == 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}
