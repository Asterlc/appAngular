import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";

const adminRoutesConfig: Routes = [
    { path: '', component: AdminComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutesConfig)
    ],
    exports: [
        RouterModule
    ]
})

export class AdminRoutesConfig { }