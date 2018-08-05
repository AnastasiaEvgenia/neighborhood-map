import React from 'react';

class LocationsList extends React.Component {

	componentDidMount() {

		//Event listeners for selecting list items (locations).
		document.querySelector('.locations_list').addEventListener('click', (evt) => {
			if(evt.target.id) {
				this.props.placeClicked(evt.target.id);
			}
		});

		document.querySelector('.locations_list').addEventListener('keyup', (evt) => {
			if(evt.keyCode === 13) {
				this.props.placeClicked(evt.target.id);
			}
		});
	}

	render() {
		return(
			<ul className="locations_list">
				{this.props.locationsDisplayed.filter( (place) => 
                    this.props.query === '' || place.category === this.props.query || place.name.match(new RegExp(this.props.query, 'gi'))
                ).map( (place) => {
					return <li key={place.id} id={place.id} tabIndex="0">{place.name}</li>
				})} 
            </ul>
		)
	}
}

export default LocationsList;