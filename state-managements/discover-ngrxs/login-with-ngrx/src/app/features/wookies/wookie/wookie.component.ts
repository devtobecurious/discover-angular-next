import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WookieEntityService } from 'src/app/shared/services/wookies/wookie-entity.service';
import { Wookie } from 'src/app/core/models/wookie';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-wookie',
  templateUrl: './wookie.component.html',
  styleUrls: ['./wookie.component.css']
})
export class WookieComponent implements OnInit {
  wookie$: Observable<Wookie>;

  constructor(private service: WookieEntityService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const wookieId = this.route.snapshot.paramMap.get('id');
    this.wookie$ = this.service.entities$.pipe(
      map(wookies => wookies.find(item => item.id.toString() == wookieId))
    );
  }

}
