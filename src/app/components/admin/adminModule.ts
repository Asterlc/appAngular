import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminComponent } from "./admin.component";
import { AdminRoutesConfig } from "./admin.routes";
import { AuthGuardService } from "src/app/services/guards/app.guard";

@NgModule({
    declarations: [
        AdminComponent
    ],
    imports: [
        CommonModule,
        AdminRoutesConfig
    ],
    exports: [
        AdminComponent
    ],
    providers: [
        AuthGuardService
    ]
})

export class AdminModule { }