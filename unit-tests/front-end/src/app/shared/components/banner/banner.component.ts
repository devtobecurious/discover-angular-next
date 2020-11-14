import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `
    <h1>{{ title }}
    <div>
      banner works!
    </div>
  `,
  styles: [
  ]
})
export class BannerComponent implements OnInit {
  title = 'Hello ';

  constructor() { }

  ngOnInit(): void {
  }

}
