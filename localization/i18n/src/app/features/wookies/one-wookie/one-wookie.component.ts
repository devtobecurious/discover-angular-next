import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-wookie',
  templateUrl: './one-wookie.component.html',
  styleUrls: ['./one-wookie.component.css']
})
export class OneWookieComponent implements OnInit {
  logo: string;
  minutes = 1;
  gender: 'male' | 'female' | 'other' = 'male';
  currentDate = new Date();

  constructor(@Inject(LOCALE_ID) locale: string){
    console.log('locale', locale);
  }

  ngOnInit(): void {
    this.logo = 'https://gtswiki.gt-beginners.net/decal/png/16/80/39/8502889562077398016_1.png';
  }

}
