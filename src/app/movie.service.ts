import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {
  apiUrl = 'https://api.themoviedb.org/3/search/movie?api_key=de20353216fee7069a7226584ed84648&query=';

  constructor(private http: Http) { }

  searchMovies(searchedMovie) {
    return this.http.get(this.apiUrl + searchedMovie)
      .map(response => response.json());
  }
}
