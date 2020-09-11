import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TakeUntilService } from '../../services/take-until.service';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent implements OnInit {

  constructor(private _takeUntil: TakeUntilService) { }

  ngOnInit(): void {
    this._takeUntil.run().subscribe().unsubscribe();

    
  }

}
