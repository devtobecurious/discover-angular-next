import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang-list',
  templateUrl: './lang-list.component.html',
  styleUrls: ['./lang-list.component.css']
})
export class LangListComponent implements OnInit {
  items = ['fr', 'en'];

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  changeLang(value: string) {
    this.translate.use(value);
  }

}
