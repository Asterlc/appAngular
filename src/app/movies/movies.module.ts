import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MovieService } from "../services/movie.service";
import { MoviesComponent } from "./movies.component";
import { MoviesRoutesConfig } from "./movies.routes";
import { FileSizePipe } from "../components/Pipes/fileSize.pipe";
import { ImageFormatPipe } from "../components/Pipes/imageFormat.pipe";

@NgModule({
    declarations: [
        MoviesComponent,
        FileSizePipe, //DECLARAR PIPES CUSTOMIZADOS JUNTOS AO MÓDULO DO COMPONENTE
        ImageFormatPipe
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
    ]
})

export class MoviesModule { }