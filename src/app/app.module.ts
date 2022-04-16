//FROM ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//APP COMPONENTS
import { AppComponent } from './app.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { RegisterComponent } from './demos/reactForms/register/register.component';
//SERVICES
import { AuthGuardService } from './services/guards/app.guard';
import { RegisterGuard } from './services/guards/register.guard';
import { ProductsService } from 'src/app/services/products.service';
//REGISTER LOCALE FOR PIPES
import localePT from '@angular/common/locales/pt';
registerLocaleData(localePT);
//MÓDULOS CRIADOS
import { NavigationModule } from './navigation/navigationModule';
import { AboutModule } from './about/about.module';
//LIBS INSIDE ANGULAR
import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
    CustomFormsModule,
    NgbModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    ProductsService,
    AuthGuardService,
    RegisterGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
