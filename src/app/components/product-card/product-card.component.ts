import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/productModel';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent {
  @Input()
  product: Product; //Recebe o objeto da iteração do pai.

  @Output()
  status: EventEmitter<any> = new EventEmitter();


  productEvent() {
    this.status.emit(this.product);
  }

  //Declarado no componente pai, redeclaramos no componente filho
  //respeitando variável e tipos

  // products: any; Ou, respeitando variável e tipando dinamicamente
}
