import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "./product";
import { Observable, ObservedValueOf } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  constructor(private http: HttpClient) { };

  protected baseURL = `http://localhost:3000/`;

  getProducts(): Observable<Product[]> {
    const product = this.http.get<Product[]>(`${this.baseURL}/products`);
    return product;
  }
}
