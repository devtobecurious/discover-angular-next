import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestSingletonService } from 'src/app/services/test-singleton.service';
import { ChildService } from 'src/app/services/child.service';
import { Observable } from 'rxjs';
import { PeopleResult } from 'src/app/models';
import { HttpClientModule } from '@angular/common/http';
import { getAllPeople } from 'src/app/services';

@Component({
  selector: 'app-child-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {
  people$ = getAllPeople('https://swapi.dev/api/people');

  constructor(protected readonly service: TestSingletonService) {}
              //protected readonly childService: ChildService) {}

  ngOnInit(): void {
    // this.people$ = getAllPeople('https://swapi.dev/api/people');
  }


}
