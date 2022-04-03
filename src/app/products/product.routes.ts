import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProductsListComponent } from "./products-list/products-list.component";

const productRouterConfig: Routes = [
    { path: '', component: ProductsListComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(productRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})

export class ProductRoutingModule { }