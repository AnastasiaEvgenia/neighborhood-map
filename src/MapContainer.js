import { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {

	markers = [];
	googleMaps = this.props.google.maps;
	bounds = new this.googleMaps.LatLngBounds();
	largeInfowindow = new this.googleMaps.InfoWindow();

	componentDidMount() {
		this.map = new this.googleMaps.Map(document.getElementById('map'), {
			center: {lat: 38.24664, lng: 21.734574},
			zoom: 13,
			mapTypeControl: true
		});
		this.createMarkers();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.query !== this.props.query ) {
			this.filterMarkersArray();
		} else {
			const currentMarker = this.markers.filter( (marker) => marker.id === this.props.selectedLocationId)[0];
			this.addInfowindow(currentMarker, this.largeInfowindow);
		}
	}

	//Method to create markers and fill markers array.
	createMarkers = () => {
		this.props.allLocations.forEach( (place) => {
			const marker = new this.googleMaps.Marker({
				position: place.location,
				title: place.name,
				id: place.id,
				category: place.category,
				url: place.url,
				animation: this.googleMaps.Animation.DROP
			});
			this.markers.push(marker);
			marker.addListener('click', () => {
				this.props.placeClicked(place.id);
				this.map.zoom = 16;		
			});
		});
		this.addMarkers();
	}

	//Method to add all markers to map and fit bounds of map around them.
	addMarkers = () => {
		this.markers.forEach( (marker) => {
			marker.setMap(this.map);
			this.bounds.extend(marker.position);
		});
		this.map.fitBounds(this.bounds);
	}

	//Method to filter markers array and return only the ones matching locations from user input query.
	filterMarkersArray = () => {
		this.markers.forEach( (marker) => {
			const query = this.props.query;
			if (query === '' || query === marker.category || marker.title.match(new RegExp(query, 'gi'))) {
				marker.setMap(this.map);
			} else {
				marker.setMap(null);
			}
		});
	}

	//Method to add infowindow on markers.
	addInfowindow = (marker, infowindow) => {
			let innerHtml = '';
			this.bouncingMarker(marker);
			infowindow.marker = marker;

			fetch(marker.url)
			.then( (response) => response.json() )
			.then( (apiResponse) => {
				let info = apiResponse.response.venue;
				innerHtml = `<div class="info_container"> 
								<p class="shop_title">
									<a href="${info.shortUrl}" target="_blank" rel="noopener noreferrer" aria-label="Visit shop homepage in Foursquare.">${info.name}</a>
							    </p>
								<img class="shop_image"
									 alt="Photograph taken in ${info.name}."
									 src="${info.bestPhoto.prefix + 'cap150' + info.bestPhoto.suffix}"
								>
								<p class="shop_address">${info.location.address}</p>
							  </div>`;
				infowindow.setContent(innerHtml);
				setTimeout(() => {
					this.largeInfowindow.open(this.map, marker);
				}, 380);
			})
			.catch( (error) => {
				innerHtml = `<div class="info_error">
								<p>Error loading Foursquare API.</p>
								<p>${error}.</p>
								<p>Please check your internet connection.</p>
							 </div>`;
				infowindow.setContent(innerHtml);
				infowindow.open(this.map, marker);
			});
	}

	//Method to add bounce effect on markers.
	bouncingMarker = (marker) => {
		marker.setAnimation(this.googleMaps.Animation.BOUNCE);
        setTimeout(() => {
        	marker.setAnimation(null);
        }, 30);
	}

	render() {
		return null;
	}
}

//Function to alert for error if Api key is not authenticated.
window.gm_authFailure = () => {
	window.alert('Google Maps API authentication error');
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyD4DKxPZHi2vMPsEJ635o0WVPd8TjiwCfc'
})(MapContainer);