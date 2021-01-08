import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Actions, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { Wookie } from 'src/app/core/models/wookie';
import { ApplicationState } from 'src/app/core/store/reducers';
import { WookiesActions } from '../store/actions/actions-types';

declare var M: any;

@Component({
  selector: 'app-wookie-edit',
  templateUrl: './wookie-edit.component.html',
  styleUrls: ['./wookie-edit.component.css']
})
export class WookieEditComponent implements OnInit, AfterViewInit {
  wookieForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: {mode: string, wookie: Wookie},
              public dialogRef: MatDialogRef<WookieEditComponent>,
              private store: Store<ApplicationState>,
              private actions$: Actions) {
    this.wookieForm = this.formBuilder.group({
      name: ['rooooar', [Validators.required]],
      size: [200]
    });
  }

  ngOnInit(): void {
    const { name, size } = this.data.wookie;
    this.wookieForm.setValue({
      name,
      size
    });

    this.actions$.pipe(
      ofType(WookiesActions.wookyUpdated)
    ).subscribe(item => this.dialogRef.close());
  }

  ngAfterViewInit(): void {
    M.updateTextFields();
  }

  close(): void {
    this.dialogRef.close()
  }

  save(): void {
    const wookie: Wookie = { ...this.data.wookie, ...this.wookieForm.value };
    const update: Update<Wookie> = {
      id: wookie.id,
      changes: wookie
    };

    this.store.dispatch(WookiesActions.wookyWillUpdate({update}));
  }
}
