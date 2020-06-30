import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _service: SearchService) { }

  ngOnInit(): void {

  }

  onKey(content: string) {
    this._service.search(content);
  }

}
