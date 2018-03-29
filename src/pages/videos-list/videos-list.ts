import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Page1Page } from '../page1/page1';
import { Page2Page } from '../page2/page2';
import { IMovie } from '../../interface/IMovie';
import { VideosDetailsPage } from '../videos-details/videos-details';
import { MovieApiProvider } from  '../../providers/movie-api/movie-api'
 

@IonicPage()
@Component({
  selector: 'page-videos-list',
  templateUrl: 'videos-list.html',
})
export class VideosListPage {

	tab1:any;
	tab2:any;

	movies = new Array<IMovie>();

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private movieApiProvider: MovieApiProvider) {

  	 this.tab1 = Page1Page;
 	 this.tab2 = Page2Page;

  }

   ionViewDidLoad() {
    this.movieApiProvider.getMovies().subscribe(data =>{
      this.movies = data;
    })
  }

  goToDetail(movie: IMovie) {
  	this.navCtrl.push(VideosDetailsPage, movie);
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

 
}






  