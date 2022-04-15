import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";

const adminConfigRoute: Routes = [
    { path: '', component: AdminComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(adminConfigRoute)
    ],
    exports: [
        RouterModule
    ]
})

export class AdminRouteConfig { }