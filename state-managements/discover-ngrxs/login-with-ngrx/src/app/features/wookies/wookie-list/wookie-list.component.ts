import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Wookie } from 'src/app/core/models/wookie';
import { ApplicationState } from 'src/app/core/store/reducers';
import { WookieService } from 'src/app/shared/services/wookies/wookie.service';
import * as fromWookies from '../store/selectors/wookies.selectors';
import { WookieEditComponent } from '../wookie-edit/wookie-edit.component';
@Component({
  selector: 'app-wookie-list',
  templateUrl: './wookie-list.component.html',
  styleUrls: ['./wookie-list.component.css']
})
export class WookieListComponent implements OnInit {
  list$: Observable<Wookie[]>;


  constructor(private store: Store<ApplicationState>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.list$ = this.store.pipe(select(fromWookies.selectAllWookies));
  }

  openEditDialog(wookie: Wookie): void {
    const config = new MatDialogConfig();

    config.disableClose = true;
    config.autoFocus = true;
    config.width = '500px';
    config.data = {
      wookie,
      mode: 'update'
    };

    this.dialog.open(WookieEditComponent, config);
  }

}
