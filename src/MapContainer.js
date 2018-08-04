import { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {

	markers = [];
	bounds = new this.props.google.maps.LatLngBounds();
	largeInfowindow = new this.props.google.maps.InfoWindow();

	componentDidMount() {
		if (this.props.google) {
			this.map = new this.props.google.maps.Map(document.getElementById('map'), {
				center: {lat: 38.24664, lng: 21.734574},
				zoom: 13,
				mapTypeControl: true
			});
			this.createMarkers();
		} else {
			window.alert('Google Maps Api failed to load. Please check your iternet connection!');
		}

	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.query !== this.props.query ) {
			this.filterMarkersArray();
		} else {
			const currentMarker = this.markers.filter( (marker) => marker.id === this.props.selectedLocationId)[0];
			this.addInfowindow(currentMarker, this.largeInfowindow);
		}

		if(!this.props.google) {
			window.alert('Google Maps Api failed to load. Please check your iternet connection!');
		}
	}


	//method to create markers array
	createMarkers = () => {
		this.props.allLocations.forEach( (place) => {
			const marker = new this.props.google.maps.Marker({
				position: place.location,
				title: place.name,
				id: place.id,
				category: place.category,
				url: place.url,
				animation: this.props.google.maps.Animation.DROP
			})

			this.markers.push(marker);

			//take id of clicked marker
			marker.addListener('click', () => {
				this.props.placeClicked(place.id);
				this.map.zoom = 17;		
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

	//method to filter markers array and returns only the ones matching user query
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

	//method to add infowindow on markers
	addInfowindow = (marker, infowindow) => {
			this.bouncingMarker(marker);
			infowindow.marker = marker;

			let innerHtml = '';

			fetch(marker.url)
			.then( (response) => response.json())
			.then( (apiResponse) => {
				let info = apiResponse.response.venue;
				innerHtml = `<div class="info_container"> 
								<p class="shop_title">
									<a href="${info.shortUrl}" target="_blank" aria-label="Visit shop homepage in Foursquare.">${info.name}</a>
							    </p>
								<img class="shop_image"
									 tabIndex="0"
									 alt="Photograph taken in ${info.name}."
									 src="${info.bestPhoto.prefix + 'cap150' + info.bestPhoto.suffix}"
								>
								<p class="shop_address" tabIndex="0">${info.location.address}</p>
							  </div>`

			infowindow.setContent(innerHtml);
			infowindow.open(this.map, marker);
			})
			.catch( (error) => {
				innerHtml = `<div class="info_error" tabIndex="0">
								<p>Error loading Foursquare API.</p>
								<p>${error}.</p>
								<p>Please check your internet connection.</p>
							 </div>`
				infowindow.setContent(innerHtml);
				infowindow.open(this.map, marker);
			});

	}

	bouncingMarker = (marker) => {
		marker.setAnimation(this.props.google.maps.Animation.BOUNCE);
        	setTimeout(() => {
        		marker.setAnimation(null);
        	},1200);
	}


	render() {
		return null;
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyD4DKxPZHi2vMPsEJ635o0WVPd8TjiwCfc'
})(MapContainer);