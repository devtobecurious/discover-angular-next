import { Component } from '@angular/core';
import { PeopleDatalayerService } from './features/peoples/people-datalayer.service';
import { Observable } from 'rxjs';
import { PeopleApiResult } from './features/peoples/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-with-var-env';
  people$: Observable<PeopleApiResult>

  constructor(private readonly service: PeopleDatalayerService) {
    this.people$ = this.service.getAll();
  }
}
