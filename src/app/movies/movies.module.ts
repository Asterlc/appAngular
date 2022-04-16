import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MovieService } from "../services/movie.service";
import { MoviesComponent } from "./movies.component";
import { MoviesRoutesConfig } from "./movies.routes";

@NgModule({
    declarations: [
        MoviesComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        MoviesComponent,
        MoviesRoutesConfig
    ],
    providers: [
        MovieService
    ]
})

export class MoviesModule { }