import { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {

	markers = [];
	bounds = new this.props.google.maps.LatLngBounds();

	componentDidMount() {
		this.map = new this.props.google.maps.Map(document.getElementById('map'), {
			center: this.props.mapCenter,
			zoom: 13,
			mapTypeControl: true
		});

		this.createMarkers();
	}

	//method to create markers array
	createMarkers = () => {
		this.props.allLocations.map( (place) => {
			const marker = new this.props.google.maps.Marker({
				position: place.location,
				title: place.name,
				id: place.id,
				animation: this.props.google.maps.Animation.DROP
			})

			// //event listener to add infowindow when marker is clicked
			// marker.addEventListener('click', () => {
			// 	addInfowindow();
			// });

			return this.markers.push(marker);
		});
		this.addMarkers();
	}

	//method to add all markers to map and fit bounds of map around them
	addMarkers = () => {
		this.markers.forEach( (marker) => {
			marker.setMap(this.map)
			this.bounds.extend(marker.position)
		});

		this.map.fitBounds(this.bounds);
	}


	render() {
		return null;
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyD4DKxPZHi2vMPsEJ635o0WVPd8TjiwCfc'
})(MapContainer);