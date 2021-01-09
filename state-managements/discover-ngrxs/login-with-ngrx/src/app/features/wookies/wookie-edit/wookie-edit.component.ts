import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EntityChangeTracker, EntityOp } from '@ngrx/data';
import { Actions, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { filter, tap } from 'rxjs/operators';
import { Wookie } from 'src/app/core/models/wookie';
import { ApplicationState } from 'src/app/core/store/reducers';
import { WookieEntityService } from 'src/app/shared/services/wookies/wookie-entity.service';
import { WookiesActions } from '../store/actions/actions-types';

declare var M: any;

@Component({
  selector: 'app-wookie-edit',
  templateUrl: './wookie-edit.component.html',
  styleUrls: ['./wookie-edit.component.css']
})
export class WookieEditComponent implements OnInit, AfterViewInit {
  wookieForm: FormGroup;
  mode: 'create' | 'update';

  constructor(private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: {mode: 'create' | 'update', wookie: Wookie},
              public dialogRef: MatDialogRef<WookieEditComponent>,
              private service: WookieEntityService) {

    this.wookieForm = this.formBuilder.group({
      name: ['rooooar', [Validators.required]],
      size: [200]
    });

    this.mode = this.data.mode;
  }

  ngOnInit(): void {
    const { name, size } = this.data.wookie;
    this.wookieForm.setValue({
      name,
      size
    });

    this.service.entityActions$.pipe(
      filter(item => item.type.endsWith(EntityOp.SAVE_UPDATE_ONE_SUCCESS) || item.type.endsWith(EntityOp.SAVE_ADD_ONE_SUCCESS))
    ).subscribe(
      item => this.dialogRef.close()
    );
  }

  ngAfterViewInit(): void {
    M.updateTextFields();
  }

  close(): void {
    this.dialogRef.close()
  }

  save(): void {
    const wookie: Wookie = { ...this.data.wookie, ...this.wookieForm.value };

    if (this.mode == 'update') {
      this.service.update(wookie);
    } else if (this.mode == 'create') {
      this.service.add(wookie);
    }
  }
}
