import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";

@NgModule({
    declarations: [
        AboutComponent,
        ContactComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        AboutComponent,
        ContactComponent
    ]
})

export class AboutModule { }