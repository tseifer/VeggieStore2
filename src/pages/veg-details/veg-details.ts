import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
	selector   : 'page-veg-details',
	templateUrl: 'veg-details.html'
})
export class VegDetailsPage
{
	
	veg: any = {};
	
	constructor(public navCtrl: NavController, public navParams: NavParams) {}
	
	ionViewDidLoad() {
		this.veg = this.navParams.data;
	}
	
}
