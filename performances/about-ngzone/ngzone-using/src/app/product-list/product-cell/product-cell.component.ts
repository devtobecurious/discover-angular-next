import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductType } from 'src/app/table-with-css/models';

@Component({
  selector: 'app-product-cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-cell.component.html',
  styleUrls: ['./product-cell.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductCellComponent {
  @Input() product !: ProductType;
}
