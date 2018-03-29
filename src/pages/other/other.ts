import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Flashlight } from '@ionic-native/flashlight';
import { Geolocation } from '@ionic-native/geolocation';



/**
 * Generated class for the OtherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-other',
  templateUrl: 'other.html',
})
export class OtherPage {

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	private camera: Camera,
  	private flashlight: Flashlight,
  	private geolocation: Geolocation

  	) {
  }

  base64Image : string;
  // latidude=resp.coords.latitude;
  // longitude=resp.coords.longitude;
	
	getFoto(){
		const options: CameraOptions = {
		quality: 100,
		destinationType: this.camera.DestinationType.DATA_URL,
		encodingType: this.camera.EncodingType.JPEG,
		mediaType: this.camera.MediaType.PICTURE,
		saveToPhotoAlbum:true
		}

		this.camera.getPicture(options).then((imageData) => {
		// imageData is either a base64 encoded string or a file URI
		// If it's base64:
		this.base64Image = 'data:image/jpeg;base64,' + imageData;
		}, (err) => {
		// Handle error
		});
	}

	flashOn(){
		this.flashlight.toggle();
	}

	localizeIt(){
		/*this.geolocation.getCurrentPosition().then((resp) => {
		 // resp.coords.latitude
		
		 // resp.coords.longitude
		}).catch((error) => {
		  console.log('Error getting location', error);
		});

		this.watch = this.geolocation.watchPosition();
		watch.subscribe((data) => {
		 // data can be a set of coordinates, or an error (if an error occurred).
		 // data.coords.latitude
		 // data.coords.longitude
		});

	}*/


}
  ionViewDidLoad() {
    console.log('ionViewDidLoad OtherPage');
  }

}
