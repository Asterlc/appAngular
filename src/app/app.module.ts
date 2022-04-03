import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// import { MenuComponent } from './navigation/menu/menu.component';
// import { HomeComponent } from './navigation/home/home.component';
// import { FooterComponent } from './navigation/footer/footer.component';
import { AboutComponent } from './about/about/about.component';
import { ContactComponent } from './about/contact/contact.component';
import { rootRoutesConfig } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
registerLocaleData(localePT);

import { ProductsService } from './services/products.service';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { RegisterComponent } from './demos/reactForms/register/register.component';

import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation';
import { NavigationModule } from './navigation/navigationModule';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    DataBindingComponent,
    ProductsListComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NavigationModule,
    NgBrazil,
    TextMaskModule,
    CustomFormsModule,
    [RouterModule.forRoot(rootRoutesConfig, { useHash: false })]
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
