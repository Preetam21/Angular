import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import {Movie} from './movie';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FavCrudService {

  constructor(private http: Http) { }
  localurl: string = 'http://localhost:64990/api/values/';
  private headers=new Headers({'Content-Type':'application/json'});
  res:any="";
  add(movie:Movie) {
    return this.http.post(this.localurl,movie,{headers:this.headers})
      .map(res=>{this.res=res;
      console.log(movie)});
   }
   delete(id:number){
     return this.http.delete(this.localurl+id);
   }
   getFavMovies() {
    return this.http.get(this.localurl)
      .map(response => response.json());
  }
  update(movie:any,comment){
    let id=movie.id;
    movie.comment=comment;
    return this.http.put(this.localurl+id,movie,{headers:this.headers}).map(response=>response.json());
  }
}
