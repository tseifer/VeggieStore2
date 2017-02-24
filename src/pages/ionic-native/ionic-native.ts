import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Vibration} from 'ionic-native';
import {Geolocation} from 'ionic-native';

/*
 Generated class for the IonicNative page.
 
 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
	selector   : 'page-ionic-native',
	templateUrl: 'ionic-native.html'
})
export class IonicNativePage
{
	location: string;
	
	constructor(public navCtrl: NavController, public navParams: NavParams) {}
	
	ionViewDidLoad() {
		console.log('ionViewDidLoad IonicNativePage');
	}
	
	onVibrate() {
		debugger;
		Vibration.vibrate(1000);
	}
	
	onGetLocation() {
		//promise
		
		/*
		 Geolocation.getCurrentPosition()
		 .then((resp) => {
		 this.location = resp.coords.latitude + ":" + resp.coords.longitude
		 }).catch((error) => {
		 console.log('Error getting location', error);
		 });
		 
		 */
		
		
		//observable
		
		let watch = Geolocation.watchPosition();
		
		watch.subscribe((data) => {
			
			// data can be a set of coordinates, or an error (if an error occurred).
			if (data.coords.latitude && data.coords.longitude)
			{
				this.location = data.coords.latitude + ":" + data.coords.longitude
			}
			
		});
		
	}
}























