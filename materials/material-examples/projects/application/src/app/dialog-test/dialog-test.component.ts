import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogDisplayComponent } from '../dialog-display/dialog-display.component';

@Component({
  selector: 'app-dialog-test',
  templateUrl: './dialog-test.component.html',
  styleUrls: ['./dialog-test.component.css']
})
export class DialogTestComponent implements OnInit {
  private config = new MatDialogConfig();
  sliderValue = 0;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.config.disableClose = true;
    this.config.width = '500px';


  }

  display() {
    this.config.data = {
      mode: 'update',
      slider: {
        value: this.sliderValue
      }
    };

    this.dialog.open(DialogDisplayComponent, this.config);
  }
}
