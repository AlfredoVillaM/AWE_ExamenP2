import { Component, inject, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  private productsService = inject(ProductsService);
  product!: Product;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productsService.getProductById(id).subscribe((data) => {
      this.product = data;
    });
  }

  getFormattedPrice() {
    const [integerPart, decimalPart] = this.product.price.toFixed(2).split('.');
    return { integerPart, decimalPart };
  }
}
