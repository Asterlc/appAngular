import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MoviesComponent } from "./movies.component";

const movieRoutesConfig: Routes = [
    { path: '', component: MoviesComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(movieRoutesConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class MoviesRoutesConfig { }