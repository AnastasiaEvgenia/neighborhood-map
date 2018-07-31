import React from 'react';
import locationData from './data.js';

class LocationsList extends React.Component {

	render() {
		return(
			<ul className="locations_list">
				{locationData.map( (place) => {
					return <li key={place.id}>{place.name}</li>
				})} 
            </ul>
		)
	}
}

export default LocationsList;