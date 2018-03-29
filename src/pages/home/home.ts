import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VideosListPage } from '../videos-list/videos-list';
import { FavoriteMovieProvider } from '../../providers/favorite-movie/favorite-movie';
import { IMovie } from "../../interface/IMovie";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  favoriteMovies: IMovie[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private favoriteMovieProvider: FavoriteMovieProvider) {

  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad MyMoviesPage");
  }

  ionViewWillEnter() {
    this.initFavoriteMovies();
  }
 
  private initFavoriteMovies() {
    this.favoriteMovieProvider
      .getFavoriteMovies()
      .then(favs => (this.favoriteMovies = favs));
  }
 
 //pointe vers la page Videos list
  findMovie() {
    this.navCtrl.push(VideosListPage);
  }

  goToDetail(movie: IMovie) {
    this.navCtrl.push(VideosListPage, movie);
  }

}
