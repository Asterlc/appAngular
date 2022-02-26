import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './navigation/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about/about.component';
import { ContactComponent } from './about/contact/contact.component';
import { rootRoutesConfig } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


import { ProductsService } from './services/products.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    [RouterModule.forRoot(rootRoutesConfig, { useHash: false })]
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
