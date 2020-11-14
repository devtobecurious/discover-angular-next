import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-easy',
  templateUrl: './first-easy.component.html',
  styleUrls: ['./first-easy.component.css']
})
export class FirstEasyComponent implements OnInit {
  isOn = false;

  constructor() { }

  ngOnInit(): void {
  }

  clicked() { this.isOn = !this.isOn; }

  get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }
}
