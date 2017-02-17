import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {DataService} from '../../service/Data.service';
declare var console;

@Component({
	selector   : 'page-shopping-bag',
	templateUrl: 'shopping-bag.html'
})
export class ShoppingBagPage
{
	
	constructor(public navCtrl: NavController, public navParams: NavParams, private ds: DataService) { }
	
	debug      = true;
	bag: any[] = [];
	total: number;
	
	ionViewDidEnter() {
		this.bag = this.ds.getShoppingBag();
		this.total = this.bag.reduce((p, v) => p += v.price, 0);
	}
	
	onRemove(i){
		
		console.log(i);
	}
	log(...msg) {
		if (this.debug) console.log(...msg);
	}
}
