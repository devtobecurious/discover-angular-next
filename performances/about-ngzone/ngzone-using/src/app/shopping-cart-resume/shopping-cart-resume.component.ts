import { Component, inject } from '@angular/core';
import { ShoppingCart } from '../table-with-css/services';
import { ProductType } from '../table-with-css/models';

@Component({
  selector: 'app-shopping-cart-resume',
  templateUrl: './shopping-cart-resume.component.html',
  styleUrls: ['./shopping-cart-resume.component.css']
})
export class ShoppingCartResumeComponent {
  products$ = inject(ShoppingCart).state;

  trackProduct(index: number, item: ProductType) {
    return item.id;
  }
}
