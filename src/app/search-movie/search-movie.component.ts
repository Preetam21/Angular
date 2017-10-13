import { Component, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../movie.service';
@Component({
  selector: 'search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent {
  constructor(private movieService: MovieService) { }
  @Output() onSearched: EventEmitter<any> = new EventEmitter();
  movies: any = {};

  getMovies(searchedMovie: string): void {
    this.movieService.searchMovies(searchedMovie).subscribe(res => {
      this.movies = res.results;
      console.log(res);
      this.onSearched.emit(this.movies);
    });
  }
}
