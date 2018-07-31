import { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
	componentDidMount() {
		this.map = new this.props.google.maps.Map(document.getElementById('map'), {
			center: {
				lat: 38.24664,
				lng: 21.734574
			},

			zoom: 13,
			mapTypeControl: true
		});
	}

	render() {
		return null;
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyD4DKxPZHi2vMPsEJ635o0WVPd8TjiwCfc'
})(MapContainer);