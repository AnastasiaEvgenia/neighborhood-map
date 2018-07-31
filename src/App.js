import React, { Component } from 'react';
import './App.css';
import locationData from './data.js';
import Header from './Header.js';
import LocationsFilter from './LocationsFilter.js'
import LocationsList from './LocationsList.js'
import MapContainer from './MapContainer.js';
import Footer from './Footer.js'

class App extends Component {
  state = {
    locationsDisplayed: []
  }

  componentDidMount() {
    this.setState({
      locationsDisplayed: locationData
    });
  }

  filterLocationsOnCategories = (catVal) => {
    this.setState( (prevState) => {
      const newLocDisplayed = prevState.filter( (place) => (place.category === catVal));
      return {locationsDisplayed: newLocDisplayed}
    });
  }

  render() {
    return (
      <div className="App">

        <Header />

        <main className="app_main">
          <nav className="nav_menu">
            <LocationsFilter filterLocationsOnCategories={this.filterLocationsOnCategories}/>
            <LocationsList  locationsDisplayed={this.state.locationsDisplayed}/>
          </nav>
          <div id="map" className="map_container">
            <MapContainer />
          </div>
        </main>

        <Footer />

      </div>
    );
  }
}

export default App;
