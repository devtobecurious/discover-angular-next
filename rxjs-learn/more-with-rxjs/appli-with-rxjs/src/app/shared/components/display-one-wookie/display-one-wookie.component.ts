import { Component, OnInit } from '@angular/core';
import { WookieService } from '../../services/wookie.service';
import { Observable } from 'rxjs';
import { Wookie } from 'src/app/core/models/wookie';

@Component({
  selector: 'app-display-one-wookie',
  templateUrl: './display-one-wookie.component.html',
  styleUrls: ['./display-one-wookie.component.css']
})
export class DisplayOneWookieComponent implements OnInit {
  public wookie$: Observable<Wookie>;

  constructor(private _service: WookieService) { }

  ngOnInit(): void {
    console.log('display ,');
    this.wookie$ = this._service.getOne();
  }

}
