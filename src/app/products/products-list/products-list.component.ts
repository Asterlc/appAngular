import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../models/productModel';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, AfterViewInit {
  products: Product[];

  constructor(private productService: ProductsService) { }

  @ViewChild('test', { static: false }) screenMessage: ElementRef;
  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(element => {
        this.products = element
        // console.log('element', element)
      },
        error => console.log(error)
      );
  }
  ngAfterViewInit(): void {
    let clickTxt: Observable<any> = fromEvent(this.screenMessage.nativeElement, 'click');
    clickTxt.subscribe(()=>{
      alert('Seja bem-vindo !')
    })
  }

  changeStatus(event: Product) {
    event.active = !event.active;
  }
}