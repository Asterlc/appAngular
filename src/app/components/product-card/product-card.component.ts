import { Component, Input } from '@angular/core';
import { Product } from '../../models/productModel';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent {
  @Input()
  products: Product[];
  //Declarado no componente pai, redeclaramos no componente filho
  //respeitando variável e tipos

  // products: any; Ou, respeitando variável e tipando dinamicamente
}
