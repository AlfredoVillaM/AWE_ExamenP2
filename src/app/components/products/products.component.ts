import { Component, inject } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent, NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  private productsService = inject(ProductsService);

  constructor() {
    this.productsService.fetchProducts();
  }

  public get products(): Product[] {
    return this.productsService.products;
  }
}
