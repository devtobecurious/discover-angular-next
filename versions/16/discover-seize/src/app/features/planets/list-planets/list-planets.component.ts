import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PLANETS_STORE, provideTodosStore } from './signals';

@Component({
  selector: 'app-list-planets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-planets.component.html',
  styleUrls: ['./list-planets.component.css'],
  providers: [
    provideTodosStore()
  ]
})
export class ListPlanetsComponent implements OnInit {
  store = inject(PLANETS_STORE);
  state = this.store.selectorAll();

  ngOnInit(): void {
    this.store.loadAll();
  }


}
