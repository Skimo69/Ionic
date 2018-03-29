import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { VideosListPage } from '../pages/videos-list/videos-list';
import { VideosDetailsPage } from '../pages/videos-details/videos-details';
import { Page1Page } from '../pages/page1/page1';
import { Page2Page } from '../pages/page2/page2';
import { OtherPage } from '../pages/other/other';
import { Camera } from '@ionic-native/camera';
import { Flashlight } from '@ionic-native/flashlight';
import { Geolocation } from '@ionic-native/geolocation';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MovieApiProvider } from '../providers/movie-api/movie-api';
import { HttpClientModule } from "@angular/common/http";
import { FavoriteMovieProvider } from '../providers/favorite-movie/favorite-movie';
import { IonicStorageModule } from '@ionic/storage';
import { TestPage } from '../pages/test/test';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    VideosListPage,
    VideosDetailsPage,
    Page1Page,
    Page2Page,
    OtherPage,
    TestPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    VideosListPage,
    VideosDetailsPage,
    Page1Page,
    Page2Page,
    OtherPage,
    TestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieApiProvider,
    FavoriteMovieProvider,
    Camera,
    Flashlight,
    Geolocation

  ]
})
export class AppModule {}
