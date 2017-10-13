import { Component, Input } from '@angular/core';
import { FavCrudService } from '../fav-crud.service';
import { Http, Response } from '@angular/http';
import{Movie} from '../movie';

@Component({
  selector: 'list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent {

  constructor(private crudservice: FavCrudService) { }
  
  @Input() movieList: any;

  addFav(movie:any) {
    this.crudservice.add(movie).subscribe();
  }
}
