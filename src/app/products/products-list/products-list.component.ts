import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../services/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(private productService: ProductsService) { }

  public products: Product[] | undefined;

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(element => {
        this.products = element
        console.log('element', element)
      },
      error => console.log(error)
      );
  }

}
