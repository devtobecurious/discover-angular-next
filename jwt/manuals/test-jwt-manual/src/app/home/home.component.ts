import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDto } from '../models/product.dto';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products$ !: Observable<ProductDto[]>;


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getAll();
  }

}
