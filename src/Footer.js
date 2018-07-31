import React from 'react';

class Footer extends React.Component {
	
	render() {
		return (
			<footer className="app_footer">
	          <p> App developed by  
	            <a href="https://www.linkedin.com/in/anaevgal/"> Alexandri Anastasia Evgenia </a>,
	            using
	            <a href="https://reactjs.org/"> React </a>,
	            <a href="https://developer.foursquare.com/"> Foursquare API </a>,
	            <a href="https://cloud.google.com/maps-platform/"> Google Maps API </a> and
	            <a href="https://icons8.com"> Icon pack by Icons8 </a>.
	          </p>
        	</footer>
		)
	}
}

export default Footer;