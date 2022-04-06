//Básico para funcionar
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

//Módulos da aplicação
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from "./not-found/not-found.component";

//Metadata do component
@NgModule({
    declarations: [
        MenuComponent,
        HomeComponent,
        FooterComponent,
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        MenuComponent,
        HomeComponent,
        FooterComponent,
        NotFoundComponent
    ]
})

export class NavigationModule { }