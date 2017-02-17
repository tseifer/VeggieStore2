import {Injectable} from '@angular/core';

const ALL_VEGGIES = [
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
];

@Injectable()
export class DataService
{
	constructor() {
		let str:string                = window.localStorage.getItem('vegetables');
		this._shoppingBag = JSON.parse(str || '[]');
		this.numberOfItemsinBag = {num: this._shoppingBag.length};
		this.count = this._shoppingBag.length;
	}
	
	private _shoppingBag: any[];
	        numberOfItemsinBag: {num: number} = {num: 0};
	        count = 0;
	
	private saveData() {
		window.localStorage.setItem('vegetables', JSON.stringify(this._shoppingBag));
	}
	
	addVegToShoopingBag(veg) {
		this.numberOfItemsinBag.num++;
		this.count++;
		
		// console.log('adding to bag:', veg);
		this._shoppingBag.push(veg);
		this.saveData();
	}
	
	getShoppingBag() {
		return this._shoppingBag;
	}
	
	removeItem(idx) {
		this._shoppingBag.splice(idx, 1);
		this.numberOfItemsinBag.num--;
		this.count--;
		
		this.saveData();
		
	}
	
	getVeggies() {
		return ALL_VEGGIES;
	}
}