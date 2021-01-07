import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Wookie } from 'src/app/core/models/wookie';

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
                ) {
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
  }

  ngAfterViewInit(): void {
    M.updateTextFields();
  }

  save() {
    this.dialogRef.close();
  }
}
