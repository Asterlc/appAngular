import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(public modalService: NgbModal) { }

  openModal(content: any, options = {}) {
    return this.modalService.open(content, options);
  }

  dismissModal() {
    return this.modalService.dismissAll();
  }
}
