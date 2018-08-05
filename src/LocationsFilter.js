import React from 'react';

class LocationsFilter extends React.Component {

	componentDidMount() {
		const selection = document.querySelector('.filter_form input');
		//Event listener for changes in search input field.
		selection.addEventListener("input", (evt) => {
			this.props.filterLocationsOnUserInput(evt.target.value);
		});
	}

	render() {
		return(
              <div className="filter_form">
                <input 
                	list="categories"
                	type="search"
                	placeholder="Filter locations.."
                	aria-label="Filter through locations"
                	value={this.props.query}
                />
                <datalist id="categories">
                  <option value="Cafe"/>
                  <option value="Candy Store"/>
                  <option value="Restaurant"/>
                  <option value="Bar"/>
                </datalist>
              </div>
		)
	}
}

export default LocationsFilter;