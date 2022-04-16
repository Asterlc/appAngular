import { Component, OnInit } from '@angular/core';
import { BarService } from '../../services/bar.service';
import { Drinks } from 'src/app/models/drinksModel';

@Component({
  selector: 'app-di-zones',
  templateUrl: './di-zones.component.html',
  providers: [
    { provide: BarService, useClass: BarService }
  ]//
})
export class DiZonesComponent implements OnInit {

  barDrinks: Drinks[];
  constructor(private barService: BarService) { }

  ngOnInit(): void {
    this.barService.getDrinks().subscribe(element => {
      this.barDrinks = element
    },
      error => console.log(error)
      );
  }
}
