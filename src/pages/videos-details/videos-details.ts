import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoriteMovieProvider } from '../../providers/favorite-movie/favorite-movie';
import { IMovie } from "../../interface/IMovie";
/**
 * Generated class for the VideosDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'VideosDetailsPage',
  templateUrl: 'videos-details.html',
})
export class VideosDetailsPage {
	 movie: IMovie;
	 isFavorite: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private favoriteMovieProvider: FavoriteMovieProvider) {
  }

  ionViewDidLoad() {
    this.movie = this.navParams.data; 
    console.log(this.navParams.data);
    this.favoriteMovieProvider
      .isFavoriteMovie(this.movie)
      .then(value => (this.isFavorite = value));
  }
// gestion des favoris
  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
    this.favoriteMovieProvider.toogleFavoriteMovie(this.movie);
  }
}


