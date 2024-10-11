import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Wookie } from 'src/app/core/models/wookie';
import { WookieEntityService } from 'src/app/shared/services/wookies/wookie-entity.service';
import { WookieEditComponent } from '../wookie-edit/wookie-edit.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  wookies$: Observable<Wookie[]>;

  constructor(private service: WookieEntityService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.wookies$ = this.service.filteredEntities$;
  }

  openCreateDialog(): void {
    this.openDialog('create', null);
  }

  openEditDialog(wookie: Wookie): void {
    this.openDialog('update', wookie);
  }

  deleteWookie(wookie: Wookie): void {
    this.service.delete(wookie);
  }

  private openDialog(state: 'create' | 'update', wookie: Wookie): void {
    const config = new MatDialogConfig();

    config.disableClose = true;
    config.autoFocus = true;
    config.width = '500px';
    config.data = {
      wookie,
      mode: state
    };

    this.dialog.open(WookieEditComponent, config);
  }
}
