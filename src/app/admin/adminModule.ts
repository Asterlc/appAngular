import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { AdminComponent } from "./admin.component";

@NgModule({
    declarations: [
        AdminComponent
    ],
    imports: [
        RouterModule,
        CommonModule
    ],
    exports: [
        AdminComponent
    ]
})

export class AdminModule { }