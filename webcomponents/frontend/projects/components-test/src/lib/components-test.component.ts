import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-components-test',
  template: `
    <p>
      components-test works!
    </p>
  `,
  styles: [
  ]
})
export class ComponentsTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
