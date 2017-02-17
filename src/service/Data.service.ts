import {Injectable} from '@angular/core';

@Injectable()
export class DataService
{
	constructor() {
		
	}
	
	private _shoppingBag: any[] = [];
	
	addVegToShoopingBag(veg) {
		// console.log('adding to bag:', veg);
		this._shoppingBag.push(veg);
	}
	
	getShoppingBag() {
		return this._shoppingBag;
	}
	
	removeItem(idx) {
		this._shoppingBag.splice(idx, 1)
	}
	
	getVeggies() {
		return [
			{
				name  : 'cucumber',
				price : 4.44,
				color : 'green',
				imgUrl: '1.jpg'
			},
			{
				name  : 'tomato',
				price : 8.44,
				color : 'red',
				imgUrl: '2.jpg'
				
			},
			{
				name  : 'hazil',
				price : 12.44,
				color : 'purple',
				imgUrl: '3.jpg'
				
			}
		]
	}
}