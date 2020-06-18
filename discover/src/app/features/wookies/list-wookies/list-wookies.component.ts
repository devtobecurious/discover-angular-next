import { Component, OnInit } from '@angular/core';
import { Wookie } from 'src/app/core/models/wookie';
import { Observable } from 'rxjs';
import { WookiesService } from 'src/app/shared/services/wookies.service';

@Component({
  selector: 'app-list-wookies',
  templateUrl: './list-wookies.component.html',
  styleUrls: ['./list-wookies.component.css']
})
export class ListWookiesComponent implements OnInit {
  $wookiesList: Observable<Wookie[]> = null;

  constructor(private _wookieService: WookiesService) { }

  ngOnInit(): void {
    this.$wookiesList = this._wookieService.getAll();
  }
  
  
}
