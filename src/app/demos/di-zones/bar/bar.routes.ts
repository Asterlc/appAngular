import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DiZonesComponent } from "../di-zones.component";

const barRoutesConfig: Routes = [
    { path: '', component: DiZonesComponent }
]
@NgModule({
    imports: [
        RouterModule.forChild(barRoutesConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class BarRoutesModule { };