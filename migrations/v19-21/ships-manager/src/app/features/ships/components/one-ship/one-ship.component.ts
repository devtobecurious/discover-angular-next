import { Component, inject, input, OnChanges, SimpleChanges } from '@angular/core';
import { Ship } from '../../models/ship';
import { LoadShipService } from '../../services/load-ship.service';

@Component({
  selector: 'app-one-ship',
  imports: [],
  templateUrl: './one-ship.component.html',
  styleUrl: './one-ship.component.css'
})
export class OneShipComponent implements OnChanges {
  private readonly service = inject(LoadShipService);
  readonly ship = input.required<Ship>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ship']) {
      const ship = this.ship();
      if(ship) {
        this.service.dispatch(ship);
      }
    }
  }


}
