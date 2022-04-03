import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductRoutingModule } from "./product.routes";
import { ProductsService } from "../services/products.service";

@NgModule({
    declarations: [
        ProductsListComponent
    ],
    imports: [
        CommonModule,
        ProductRoutingModule
    ],
    exports: [

    ],
    providers: [
        ProductsService
    ]
})

export class ProductModule { }