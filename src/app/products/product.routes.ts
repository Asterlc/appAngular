import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductDetailComponent } from "../components/product-detail/product-detail.component";
import { ProductAppComponent } from "./productAppComponent";
// import { NotFoundComponent } from "../navigation/not-found/not-found.component";

const productRouterConfig: Routes = [

    {
        path: '', component: ProductAppComponent, children: [
            { path: '', component: ProductsListComponent },
            { path: 'details/:id', component: ProductDetailComponent },
        ]
    }
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