import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import LocationsFilter from './LocationsFilter.js'
import LocationsList from './LocationsList.js'
import MapContainer from './MapContainer.js';
import Footer from './Footer.js'

class App extends Component {

  render() {
    return (
      <div className="App">

        <Header />

        <main className="app_main">
          <nav className="nav_menu">
            <LocationsFilter />
            <LocationsList />
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
