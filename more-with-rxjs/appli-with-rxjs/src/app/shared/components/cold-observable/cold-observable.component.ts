import { People } from './../../../core/models/people';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';
import { map, shareReplay, publishReplay } from 'rxjs/operators';

@Component({
  selector: 'app-cold-observable',
  templateUrl: './cold-observable.component.html',
  styleUrls: ['./cold-observable.component.css']
})
export class ColdObservableComponent implements OnInit {
  private peoples$: Observable<People[]> = null;
  private peopleCount$: Observable<number> = null;

  constructor(private swapi: SwapiService) { }

  ngOnInit(): void {
    this.peoples$ = this.swapi.getAll().pipe(shareReplay(1));

    this.peopleCount$ = this.peoples$.pipe(map(item => item.length));
  }

}
