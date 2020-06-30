import { Component, OnInit } from '@angular/core';
import { Wookie } from 'src/app/core/models/wookie';
import { Observable } from 'rxjs';
import { map, mergeAll, switchAll, switchMap } from 'rxjs/operators';
import { WookiesService } from 'src/app/shared/services/wookies.service';
import { SearchService } from '../../../shared/services/search.service';

@Component({
  selector: 'app-list-wookies',
  templateUrl: './list-wookies.component.html',
  styleUrls: ['./list-wookies.component.css']
})
export class ListWookiesComponent implements OnInit {
  $wookiesList: Observable<Wookie[]> = null;

  constructor(private _wookieService: WookiesService,
              private _searchService: SearchService) { }

  ngOnInit(): void {
    this.$wookiesList = this._searchService.content.pipe(switchMap(content => this._wookieService.getAll(content)));
  }


}
