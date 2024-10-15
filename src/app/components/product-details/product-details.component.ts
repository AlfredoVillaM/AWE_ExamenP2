import { Component, inject, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  private productsService = inject(ProductsService);
  private router = inject(Router);
  product!: Product;

  constructor(private route: ActivatedRoute,) {
    this.productsService.fetchProducts();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productsService.getProductById(id);
  }

  goBack(): void{
    this.router.navigate(['/products']);
  }

  getFormattedPrice() {
    const [integerPart, decimalPart] = this.product.price.toFixed(2).split('.');
    return { integerPart, decimalPart };
  }

  getFullStars(): any[] {
    const fullStars = Math.floor(this.product.rating.rate);
    return new Array(fullStars);
  }

  getEmptyStars(): any[] {
    const fullStars = Math.floor(this.product.rating.rate);
    const emptyStars = 5 - fullStars;
    return new Array(emptyStars);
  }
}
