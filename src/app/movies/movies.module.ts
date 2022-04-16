import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MovieService } from "../services/movie.service";
import { MoviesComponent } from "./movies.component";
import { MoviesRoutesConfig } from "./movies.routes";
import { FileSizePipe } from "../components/Pipes/fileSizePipe";

@NgModule({
    declarations: [
        MoviesComponent,
        FileSizePipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        MoviesComponent,
        MoviesRoutesConfig
    ],
    providers: [
        MovieService,
        FileSizePipe
    ]
})

export class MoviesModule { }