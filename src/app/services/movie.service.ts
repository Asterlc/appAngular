import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from '../models/moviesModel';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movieHelper: Movie;
  protected baseURL = `http://localhost:3000`;
  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    const movies = this.http.get<Movie[]>(`${this.baseURL}/movies`);
    return movies;
  }

  getMovieById(id: number): Movie {
    this.http.get<Observable<Movie>>(`${this.baseURL}/movies/${id}`).subscribe(data => Object.assign(this.movieHelper, ...[data]));
    return this.movieHelper;
  }
}
