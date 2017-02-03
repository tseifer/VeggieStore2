import {Component, Input} from '@angular/core';
import {NavParams} from 'ionic-angular';

@Component({
	selector   : 'veg',
	templateUrl: 'veg.html'
})
export class VegComponent
{
	@Input() veg;
	
	constructor(private navParams: NavParams) {
	}
	
}
