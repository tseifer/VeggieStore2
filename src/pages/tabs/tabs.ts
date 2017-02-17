import {Component} from '@angular/core';

import {HomePage} from '../home/home';
import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {VeggieListPage} from '../veggie-list/veggie-list';
import {ShoppingBagPage} from '../shopping-bag/shopping-bag';
import {DataService} from '../../service/Data.service';

@Component({
	templateUrl: 'tabs.html'
})
export class TabsPage
{
	// this tells the tabs component which Pages
	// should be each tab's root Page
	veggieList: any = VeggieListPage;
	shoppingBag: any = ShoppingBagPage;
	info;
	
	constructor(private ds:DataService) {
			this.info = this.ds.numberOfItemsinBag;
	}
	
	
}
