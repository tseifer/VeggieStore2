import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {TabsPage} from '../pages/tabs/tabs';
import {VeggieListPage} from '../pages/veggie-list/veggie-list';
import {DataService} from '../service/Data.service';
import {VegComponent} from '../components/veg/veg';
import {VegDetailsPage} from '../pages/veg-details/veg-details';
import {ShoppingBagPage} from '../pages/shopping-bag/shopping-bag';
import {IonicNativePage} from '../pages/ionic-native/ionic-native';
import {MyMapPage} from '../pages/my-map/my-map';

@NgModule({
	declarations   : [
		MyApp,
		TabsPage,
		VeggieListPage,
		VegComponent,
		VegDetailsPage,
		ShoppingBagPage,
		IonicNativePage,
		MyMapPage
	],
	imports        : [
		IonicModule.forRoot(MyApp)
	],
	bootstrap      : [IonicApp],
	entryComponents: [
		MyApp,
		TabsPage,
		VeggieListPage,
		VegComponent,
		VegDetailsPage,
		ShoppingBagPage,
		IonicNativePage,
		MyMapPage
	
	],
	providers      : [
		DataService,
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	]
})
export class AppModule
{
}
