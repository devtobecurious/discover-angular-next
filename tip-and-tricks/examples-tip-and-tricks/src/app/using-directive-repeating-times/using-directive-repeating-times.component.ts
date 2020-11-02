import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-using-directive-repeating-times',
  templateUrl: './using-directive-repeating-times.component.html',
  styleUrls: ['./using-directive-repeating-times.component.css']
})
export class UsingDirectiveRepeatingTimesComponent implements OnInit {
  days: number[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < 31; index++) {
      this.days.push(index);
    }
  }

}
