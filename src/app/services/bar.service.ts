import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drinks } from '../models/drinksModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BarService {
  drinksHelper: Drinks;
  constructor(private http: HttpClient) { }
  protected baseURL = `http://localhost:3000`;

  getDrinks(): Observable<Drinks[]> {
    const drinks = this.http.get<Drinks[]>(`${this.baseURL}/drinks`);
    return drinks;
  }

  getDrinksById(id: number): Drinks {
    this.http.get<Observable<Drinks>>(`${this.baseURL}/${id}`).subscribe(data => Object.assign(this.drinksHelper, ...[data]));
    return this.drinksHelper;
  }
}
