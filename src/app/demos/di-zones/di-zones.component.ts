import { Component, Inject, OnInit } from '@angular/core';
import { BarService } from '../../services/bar.service';
import { Drinks } from 'src/app/models/drinksModel';
import { BarOrganization, BAR_STORE_CONFIG } from './bar/bar.interface';
@Component({
  selector: 'app-di-zones',
  templateUrl: './di-zones.component.html',
  providers: [
    { provide: BarService, useClass: BarService }
  ]//
})
export class DiZonesComponent implements OnInit {

  dinamic: BarOrganization;
  configManual: BarOrganization;
  barDrinks: Drinks[];
  constructor(
    private barService: BarService,
    @Inject('Manual') private ApiConfigManual: BarOrganization,
    @Inject(BAR_STORE_CONFIG) private ApiConfig: BarOrganization
    ) { }

  ngOnInit(): void {
    this.configManual = this.ApiConfigManual; //Injeção hardcoded
    this.dinamic = this.ApiConfig; //Injeção de forma dinâmica
    this.barService.getDrinks().subscribe(element => {
      this.barDrinks = element
    },
      error => console.log(error)
      );
  }
}
