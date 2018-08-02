import { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {

	markers = [];
	bounds = new this.props.google.maps.LatLngBounds();
	largeInfowindow = new this.props.google.maps.InfoWindow();

	componentDidMount() {
		this.map = new this.props.google.maps.Map(document.getElementById('map'), {
			center: {lat: 38.24664, lng: 21.734574},
			zoom: 13,
			mapTypeControl: true
		});

		this.createMarkers();
	}


	//method to create markers array
	createMarkers = () => {
		this.props.allLocations.forEach( (place) => {
			const marker = new this.props.google.maps.Marker({
				position: place.location,
				title: place.name,
				id: place.id,
				animation: this.props.google.maps.Animation.DROP
			})

			this.markers.push(marker);

			const self = this;
			//event listener to add infowindow when marker is clicked
			marker.addListener('click', function() {
				self.addInfowindow(this, self.largeInfowindow);
				self.props.placeClicked(this.id);
			});
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

	//method to add infowindow on markers
	addInfowindow = (marker, infowindow) => {

		if(infowindow.marker !== marker) {
			infowindow.marker = marker;
			infowindow.setContent(`<div> ${marker.title} </div>`);
			infowindow.open(this.map, marker);
		}
	}

	render() {
		return null;
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyD4DKxPZHi2vMPsEJ635o0WVPd8TjiwCfc'
})(MapContainer);