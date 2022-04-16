import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarService } from '../../../services/bar.service';
import { DiZonesComponent } from './../di-zones.component';
import { BarRoutesModule } from './bar.routes';


@NgModule({
  declarations: [
    DiZonesComponent
  ],
  imports: [
    CommonModule,
    BarRoutesModule
  ],
  exports: [
    DiZonesComponent
  ],
  providers: [
    BarService
  ]
})
export class BarModule { }
