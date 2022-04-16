import { Component, OnInit } from '@angular/core';
import { ImageFormatPipe } from '../components/Pipes/imageFormat.pipe';
import { Movie } from '../models/moviesModel';
import { MovieService } from '../services/movie.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
})
export class MoviesComponent implements OnInit {
  movies: Movie[];

  constructor(
    private movieService: MovieService,
    ) { }

  ngOnInit(): void {
    this.movieService.getMovies()
      .subscribe(element => {
        this.movies = element
      },
        error => console.log(error)
      );
  }


}
