import React from 'react';

class LocationsFilter extends React.Component {

	render() {
		return(
			<form>
              <div className="filter_form">
                <input list="categories" type="text" placeholder="Filter locations.." aria-label="Filter through locations"/>
                <datalist id="categories">
                  <option value="Cafe"/>
                  <option value="Candy Store"/>
                  <option value="Restaurant"/>
                  <option value="Bar"/>
                </datalist>
              </div>
            </form>
		)
	}
}

export default LocationsFilter;