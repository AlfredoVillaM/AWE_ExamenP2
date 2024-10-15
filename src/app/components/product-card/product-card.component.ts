import { Component, inject, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  private router = inject(Router);

  @Input()
  public product: Product = {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
        rate: 0,
        count: 0
    }
  };

  getFormattedPrice() {
    const [integerPart, decimalPart] = this.product.price.toFixed(2).split('.');
    return { integerPart, decimalPart };
  }

  viewProductDetails(id: number): void {
    this.router.navigate(['/products', id]);
  }
}
