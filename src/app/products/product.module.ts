import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsService } from "../services/products.service";
import { ProductRoutingModule } from "./product.routes";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductCardComponent } from "../components/product-card/product-card.component";
import { ProductDetailComponent } from "../components/product-detail/product-detail.component";
import { ProductAppComponent } from "./productAppComponent";
@NgModule({
    declarations: [
        ProductsListComponent,
        ProductCardComponent,
        ProductDetailComponent,
        ProductAppComponent
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