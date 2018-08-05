import React from 'react';

class Footer extends React.Component {
	
	render() {
		return (
			<footer className="app_footer">
	          <p> App developed by  
	            <a href="https://www.linkedin.com/in/anaevgal/" target="_blank" rel="noopener noreferrer"> Alexandri Anastasia Evgenia </a>,
	            using
	            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"> React </a>,
	            <a href="https://developer.foursquare.com/" target="_blank" rel="noopener noreferrer"> Foursquare API </a>,
	            <a href="https://cloud.google.com/maps-platform/" target="_blank" rel="noopener noreferrer"> Google Maps API </a> and
	            <a href="https://icons8.com" target="_blank" rel="noopener noreferrer"> Icon pack by Icons8 </a>.
	          </p>
        	</footer>
		)
	}
}

export default Footer;