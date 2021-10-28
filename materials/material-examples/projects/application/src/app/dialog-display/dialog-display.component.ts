import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-display',
  templateUrl: './dialog-display.component.html',
  styleUrls: ['./dialog-display.component.css']
})
export class DialogDisplayComponent implements OnInit {
  mode = '';
  value = 0;

  constructor(@Inject(MAT_DIALOG_DATA) private data: {mode: string, slider: {value: number}},
              private dialogRef: MatDialogRef<DialogDisplayComponent>) { }

  ngOnInit(): void {
    this.mode = this.data.mode;
    this.value = this.data.slider.value;
  }

  valid() {
    this.dialogRef.close();
  }
}
