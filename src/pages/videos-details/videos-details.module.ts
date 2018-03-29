import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideosDetailsPage } from './videos-details';

@NgModule({
  declarations: [
    VideosDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(VideosDetailsPage),
  ],
})
export class VideosDetailsPageModule {}
