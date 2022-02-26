import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about/about.component";
import { ContactComponent } from "./about/contact/contact.component";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";
import { HomeComponent } from "./home/home.component";
import { ProductsListComponent } from "./products/products-list/products-list.component";

export const rootRoutesConfig: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'features-data-binding',
        component: DataBindingComponent
    },
    {
        path: 'product-list',
        component: ProductsListComponent
    },
    {
        path: 'product-detail/:id',
        component: ProductsListComponent
    }
];