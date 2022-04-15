import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about/about.component";
import { ContactComponent } from "./about/contact/contact.component";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";
import { RegisterComponent } from "./demos/reactForms/register/register.component";
import { HomeComponent } from "./navigation/home/home.component";
import { NotFoundComponent } from "./navigation/not-found/not-found.component";
import { AuthGuardService } from "./services/app.guard";

export const rootRoutesConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'features-data-binding', component: DataBindingComponent },
    { path: 'product-list', loadChildren: () => import('./products/productModule').then(m => m.ProductModule) }, //lazyLoad
    // { path: 'product-detail/:id', component: ProductsListComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'admin',
        loadChildren: () => import(`./components/admin/adminModule`).then(m => m.AdminModule),
        canLoad: [AuthGuardService],
        canActivate: [AuthGuardService]
    },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(rootRoutesConfig)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuardService
    ]
})

export class AppRoutingModule { }