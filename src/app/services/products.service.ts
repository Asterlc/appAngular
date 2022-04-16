import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "../models/productModel";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  productHelper: Product;
  // product: Product;
  constructor(private http: HttpClient) { };

  protected baseURL = `http://localhost:3000`;

  getProducts(): Observable<Product[]> {
    const products = this.http.get<Product[]>(`${this.baseURL}/products`);
    return products;
  }

  getProductById(id: number): Product {
    this.http.get<Observable<Product>>(`${this.baseURL}/products/${id}`).subscribe(data => Object.assign(this.productHelper, ...[data]));
    return this.productHelper;
  }
}
