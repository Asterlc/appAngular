import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AppRoutingModule, rootRoutesConfig } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
registerLocaleData(localePT);

import { RegisterComponent } from './demos/reactForms/register/register.component';

import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation';
import { NavigationModule } from './navigation/navigationModule';
import { AboutModule } from './about/aboutModule';
import { ProductsService } from 'src/app/services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NavigationModule, //Módulos criados para a App
    AboutModule,
    AppRoutingModule,
    NgBrazil,
    TextMaskModule,
    CustomFormsModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
