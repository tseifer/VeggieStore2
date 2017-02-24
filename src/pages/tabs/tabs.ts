import {Component} from '@angular/core';

import {VeggieListPage} from '../veggie-list/veggie-list';
import {ShoppingBagPage} from '../shopping-bag/shopping-bag';
import {DataService} from '../../service/Data.service';
import {IonicNativePage} from '../ionic-native/ionic-native';

@Component({
	templateUrl: 'tabs.html'
})
export class TabsPage
{
	// this tells the tabs component which Pages
	// should be each tab's root Page
	veggieList: any = VeggieListPage;
	shoppingBag: any = ShoppingBagPage;
	ionicNative:any = IonicNativePage;
	info;
	
	constructor(private ds:DataService) {
			this.info = this.ds.count;
	}
	
	
}
