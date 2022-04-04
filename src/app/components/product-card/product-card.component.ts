import { Component, Input } from '@angular/core';
import { Product } from '../../models/productModel';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent {
  @Input()
  products: Product[]; // vem do component pai ?

  // constructor(private productService: ProductsService) { }

  // ngOnInit(): void {
  //   this.productService.getProducts()
  //     .subscribe(element => {
  //       this.products = element
  //       // console.log('element', element)
  //     },
  //       error => console.log(error)
  //     );
  // }
}
