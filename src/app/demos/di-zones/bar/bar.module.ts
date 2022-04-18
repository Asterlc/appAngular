import { ModuleWithProviders, NgModule, TypeDecorator } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarService } from '../../../services/bar.service';
import { DiZonesComponent } from './../di-zones.component';
import { BarRoutesModule } from './bar.routes';
import { BarOrganization, BAR_STORE_CONFIG } from './bar.interface';
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
  ]
  // providers: [
  //   BarService
  // ]
})
export class BarModule {
  static forRoot(config: BarOrganization): ModuleWithProviders<any> {
    return {
      ngModule: BarModule,
      providers: [
        { provide: 'Manual', useValue: config }, //Injeção hardcoded
        { provide: BAR_STORE_CONFIG, useValue: config } //Injeção dinâmica
      ]
    }
  }
}
