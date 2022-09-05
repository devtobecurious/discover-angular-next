import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  worker() {
    if (typeof Worker !== 'undefined') {
      //console.info('import.meta.url', import.meta.url);

      console.info('lets');

      const worker = new Worker('./clear-data.worker', { type: 'module' });

      worker.onmessage = ( {data} ) => {
        console.info('return: ', data);
      }

      worker.postMessage('hello');
    }
  }

  normal() {

  }

}
