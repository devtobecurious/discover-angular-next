import { ChangeDetectionStrategy, Component, NgZone, inject } from '@angular/core';
import { ProductType, ProductTypeForView } from './models';
import { ShoppingCart } from './services';

@Component({
  selector: 'app-table-with-css',
  templateUrl: './table-with-css.component.html',
  styleUrls: ['./table-with-css.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableWithCssComponent {
  private readonly zone = inject(NgZone);
  private readonly cart = inject(ShoppingCart);
  items: ProductTypeForView[] = [{title: 'Apprendre angular', id: 1}, {title: 'Apprendre angular 2', id: 2}];

  ngAfterViewChecked(): void {
    console.info('View checked', this);

    // this.title = 'hello checked'; // never update template here or use chenge detector changes
    // this.detector.detectChanges();
  }

  addToCart(item: ProductTypeForView): void {
    this.cart.addTo(item);

    this.zone.runOutsideAngular(() => {
      const button = document.getElementById(`product-${item.id}`);
      button?.classList.add('added');
    });
  }

  addToCartInZone(item: ProductTypeForView): void {
    this.cart.addTo(item);
    item.added = true;
  }
}