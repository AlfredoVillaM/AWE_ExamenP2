import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private http = inject(HttpClient);
  private apiUrl = "https://fakestoreapi.com/products";

  private _products: Product[] = [];

  public get products(): Product[] {
    return this._products;
  }

  public fetchProducts() {
    this.http.get<Product[]>(this.apiUrl).subscribe({
      next: (response) => {
        this._products = response;
      },
      error: (error) => {
        console.log(error);
      },
    })
  }

  getProductById(id: number): Product {
    const product = this._products.find(p => p.id === id);
  
    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }

    return product;
    }
}
