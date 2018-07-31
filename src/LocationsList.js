import React from 'react';
import locationData from './data.js';

class LocationsList extends React.Component {

	render() {
		return(
			<ul className="locations_list">
              <li>Coffee Island</li>
              <li>Masasouras</li>
              <li>Gonia tou Mpampi</li>
              <li>Arxaio Odeio</li>
              <li>Basilopoulos</li>    
            </ul>
		)
	}
}

export default LocationsList;