import {Component, Input} from '@angular/core';
import {NavParams, NavController} from 'ionic-angular';
import {VegDetailsPage} from '../../pages/veg-details/veg-details';

@Component({
	selector   : 'veg',
	templateUrl: 'veg.html'
})
export class VegComponent
{
	@Input() veg;
	
	constructor(public navCtrl: NavController, private navParams: NavParams) {}
	
	selectVeg(v) {
		this.navCtrl.push(VegDetailsPage, this.veg)
	}
	
}
