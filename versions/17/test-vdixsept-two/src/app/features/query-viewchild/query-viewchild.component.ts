import { Component, ElementRef, OnInit, viewChild } from '@angular/core';
import { JohnyComponent } from './johny/johny.component';

@Component({
  selector: 'app-query-viewchild',
  standalone: true,
  imports: [JohnyComponent],
  templateUrl: './query-viewchild.component.html',
  styleUrl: './query-viewchild.component.css'
})
export class QueryViewchildComponent implements OnInit {
  divElCoucou_ = viewChild.required<ElementRef<HTMLDivElement>>('elCoucou');
  divJohnyTheUnic_ = viewChild.required<JohnyComponent>('johnyHoliday');

  ngOnInit(): void {
    this.divElCoucou_().nativeElement.title = 'Ah que coucou';
    this.divJohnyTheUnic_().title.set('Oh yeahhhhhh');
  }
}
