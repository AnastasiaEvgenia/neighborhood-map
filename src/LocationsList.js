import React from 'react';

class LocationsList extends React.Component {

	componentDidMount() {
		document.querySelector('.locations_list').addEventListener('click', (evt) => {
			this.props.placeClicked(evt.target.id);
		})
	}

	render() {
		return(
			<ul className="locations_list">
				{this.props.locationsDisplayed.filter((place) => 
                    this.props.query === '' || place.category === this.props.query || place.name.match(new RegExp(this.props.query, 'gi'))
                ).map( (place) => {
					return <li key={place.id} id={place.id}>{place.name}</li>
				})} 
            </ul>
		)
	}
}

export default LocationsList;