import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Vibration} from 'ionic-native';

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
	
	constructor(public navCtrl: NavController, public navParams: NavParams) {}
	
	ionViewDidLoad() {
		console.log('ionViewDidLoad IonicNativePage');
	}
	
	onVibrate() {
		debugger;
		Vibration.vibrate(1000);
	}
}
