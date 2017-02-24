import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {
	GoogleMap,
	GoogleMapsEvent,
	GoogleMapsLatLng,
	CameraPosition,
	GoogleMapsMarkerOptions,
	GoogleMapsMarker
} from 'ionic-native';


import {Geolocation} from 'ionic-native';


/*
 Generated class for the MyMap page.
 
 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
	selector   : 'page-my-map',
	templateUrl: 'my-map.html'
})
export class MyMapPage
{
	
	constructor(public navCtrl: NavController, public navParams: NavParams) {}
	
	ionViewDidLoad() {
		console.log('ionViewDidLoad MyMapPage');
	}
	
	ngAfterViewInit() {
		this.loadMap();
	}
	
	loadMap() {
		// make sure to create following structure in your view.html file
		// and add a height (for example 100%) to it, else the map won't be visible
		// <ion-content>
		//  <div #map id="map" style="height:100%;"></div>
		// </ion-content>
		
		// create a new map by passing HTMLElement
		let element: HTMLElement = document.getElementById('map');
		
		let map = new GoogleMap(element);
		
		// listen to MAP_READY event
		map.one(GoogleMapsEvent.MAP_READY).then(() => console.log('Map is ready!'));
		
		// create LatLng object
		// let ionic: GoogleMapsLatLng = new GoogleMapsLatLng(43.0741904, -89.3809802);
		// let ionic: GoogleMapsLatLng = new GoogleMapsLatLng(43.0741904, -89.3809802);
		
		let watch = Geolocation.watchPosition();
		
		watch.subscribe((data) => {
			
			// data can be a set of coordinates, or an error (if an error occurred).
			if (data.coords.latitude && data.coords.longitude && map)
			{
				let loc: GoogleMapsLatLng = new GoogleMapsLatLng(data.coords.latitude, data.coords.longitude);
				
				let position: CameraPosition = {
					target: loc,
					zoom  : 18,
				};
				
				map.moveCamera(position);
				
			}
			
		});
		
		
		
		/*
				// create CameraPosition
				let position: CameraPosition = {
					target: ionic,
					zoom  : 18,
					tilt  : 30
				};
				
				// move the map's camera to position
				if (map)
				{
					map.moveCamera(position);
				}
				
				// create new marker
				let markerOptions: GoogleMapsMarkerOptions = {
					position: ionic,
					title   : 'Ionic'
				};
		*/
		
	}
	
}
