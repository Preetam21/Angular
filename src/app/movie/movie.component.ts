import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  movielist:string[];
  movieList(onSearched){
    this.movielist=onSearched;
    console.log(this.movielist);
  }

}
