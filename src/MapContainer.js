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

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.query !== this.props.query ) {
			this.filterMarkersArray();
		} else {
			const currentMarker = this.markers.filter( (marker) => marker.id === this.props.selectedLocationId)[0];
			this.addInfowindow(currentMarker, this.largeInfowindow);
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

			infowindow.marker = marker;
			let innerHtml = '';
			fetch(marker.url)
			.then( (response) => response.json())
			.then( (apiResponse) => {
				let info = apiResponse.response.venue;
				innerHtml = `<div class="info_container"> 
								<p class="shop_title">
									<a href="${info.shortUrl}" target="_blank">${info.name}</a>
							    </p>
								<img class="shop_image"
									 alt="Shop photograph"
									 src="${info.bestPhoto.prefix + 'cap150' + info.bestPhoto.suffix}"
								>
								<p class="shop_address">${info.location.address}</p>
							  </div>`

			infowindow.setContent(innerHtml);
			infowindow.open(this.map, marker);
			})
			.catch( (error) => {
				innerHtml = `<div class="info_error">
								<p>Error loading fourSquare API. Refer to error ${error}.</p>
							 </div>`
				infowindow.setContent(innerHtml);
				infowindow.open(this.map, marker);
			});

	}

	render() {
		return null;
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyD4DKxPZHi2vMPsEJ635o0WVPd8TjiwCfc'
})(MapContainer);