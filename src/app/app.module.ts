import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import{FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { FavMovieComponent } from './fav-movie/fav-movie.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { ListMovieComponent } from './list-movie/list-movie.component';

import {FavCrudService} from './fav-crud.service';
import {MovieService} from './movie.service';
import { MovieComponent } from './movie/movie.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    FavMovieComponent,
    SearchMovieComponent,
    ListMovieComponent,
    MovieComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {
        path:'',
        redirectTo:'/app-movie',
        pathMatch:'full'

      },
      {path:'app-movie',
      component:MovieComponent
      },
      {
        path:'fav-movie',
        component:FavMovieComponent
      },
      {
        path:'list-movie',
        component:ListMovieComponent
      },
      {
        path:'search-movie',
        component:SearchMovieComponent
      },
      {
        path:'app-root',
        component:AppComponent
      },
      {
        path:'app-login',
        component:LoginComponent
      },
      {
        path:'app-signup',
        component:SignupComponent
      }
    ])
  ],
  providers: [MovieService,FavCrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
