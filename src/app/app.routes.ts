import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about/about.component";
import { ContactComponent } from "./about/contact/contact.component";
import { HomeComponent } from "./home/home.component";

export const rootRoutesConfig: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];