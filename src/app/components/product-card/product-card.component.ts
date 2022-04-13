import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild, OnInit } from '@angular/core';
import { Product } from '../../models/productModel';
import { AppService } from 'src/app/services/app.service';
import { AttendanceService } from 'src/app/services/attendance.service';
import { Attendance } from 'src/app/models/attendanceModel';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent implements AfterViewInit {
  items: any[] = [];
  constructor(
    public appService: AppService,
    private attendanceService: AttendanceService
  ) { }
  
  ngAfterViewInit(): void {
   this.getItems();
  }

  @Input()
  product: Product; //Recebe o objeto da iteração do pai.

  @Output()
  status: EventEmitter<any> = new EventEmitter();

  @ViewChild('modalMiniCart', { static: true }) modalMiniCart: any;


  productEvent() {
    this.status.emit(this.product);
  }

  openModalMiniCart() {
    this.appService.openModal(this.modalMiniCart, {
      backdrop: 'static',
      windowClass: 'modal-slide',
      size: 'el',
      keyboard: true
    });
  }

  addCart(item: Product) {
    if (!item.active) {
      window.alert('Produto indisponível !');
      return;
    }
    this.attendanceService.createAttendance(item);
    this.getItems();
    this.openModalMiniCart();
  }

  getItems(): Attendance[] {
    this.attendanceService.getAttendance().subscribe((data: Attendance[]) => this.items = data);
    console.log('items', this.items);
    return this.items;
  }

  //Declarado no componente pai, redeclaramos no componente filho
  //respeitando variável e tipos

  // products: any; Ou, respeitando variável e tipando dinamicamente
}
