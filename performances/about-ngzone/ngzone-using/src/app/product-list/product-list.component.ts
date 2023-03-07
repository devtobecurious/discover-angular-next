import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCellComponent } from './product-cell/product-cell.component';
import { ProductType } from '../table-with-css/models';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCellComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  items: ProductType[] = [];

  constructor() {
    for (let index = 0; index < 2000; index++) {
      this.items.push({
        id: index,
        title: `product-${index}`
      });
    }
  }
}
