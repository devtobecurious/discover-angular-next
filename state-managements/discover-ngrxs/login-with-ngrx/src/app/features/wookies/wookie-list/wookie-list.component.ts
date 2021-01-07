import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Wookie } from 'src/app/core/models/wookie';
import { ApplicationState } from 'src/app/core/store/reducers';
import { WookieService } from 'src/app/shared/services/wookies/wookie.service';
import * as fromWookies from '../store/selectors/wookies.selectors';
@Component({
  selector: 'app-wookie-list',
  templateUrl: './wookie-list.component.html',
  styleUrls: ['./wookie-list.component.css']
})
export class WookieListComponent implements OnInit {
  list$: Observable<Wookie[]>;


  constructor(private store: Store<ApplicationState>) { }

  ngOnInit(): void {
    this.list$ = this.store.pipe(select(fromWookies.selectAllBigWookies));
  }

}
