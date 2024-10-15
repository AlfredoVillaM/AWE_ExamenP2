import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    { path: "products", component: ProductsComponent },
    { path: "products/:id", component: ProductDetailsComponent },
    { path: "", redirectTo: "products", pathMatch: "full" },
    { path: "not-found", component: NotFoundComponent },
    { path: "**", redirectTo: "not-found", pathMatch: "full" },
];
