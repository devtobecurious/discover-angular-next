import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-one-one',
  templateUrl: './one-one.component.html',
  styleUrls: ['./one-one.component.css']
})
export class OneOneComponent implements OnInit {
  oneParam = { val: 'gru' };
  areYouResult$: Observable<any>;

  constructor(private translate: TranslateService) { 
      this.translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.translate.use('fr');

    this.translate.onLangChange.subscribe(event => {
      this.areYouResult$ = this.translate.get('areyou', { surname: 'Chewie'});
    });

  }
  
  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
