import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductRoutingModule } from "./product.routes";
import { ProductsService } from "../services/products.service";
import { ProductCardComponent } from "../components/product-card/product-card.component";

@NgModule({
    declarations: [
        ProductsListComponent,
        ProductCardComponent,
    ],
    imports: [
        CommonModule,
        ProductRoutingModule
    ],
    exports: [
        ProductsListComponent
    ],
    providers: [
        ProductsService
    ]
})

export class ProductModule { }