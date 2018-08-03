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
    query: '',
    selectedLocationId: ''
  }

  componentDidMount() {
    this.navigation = document.querySelector(".nav_menu");
    this.mapContainer = document.querySelector("#map");
    this.displayMenu();

    //event listener for changes in viewport
    window.addEventListener('resize', () => {
      this.displayMenu();
    });
  }

  //method to display menu
  displayMenu = () => {
    if (window.screen.width < 560) {
      this.navigation.classList.add("hidden");
      this.mapContainer.classList.add("extend");
    } else {
      this.navigation.classList.remove("hidden");
      this.mapContainer.classList.remove("extend");
    }
  }

  //method to toggle menu passed into <Header/> component
  toggleMenu = () => {
    this.navigation.classList.toggle("hidden");
    this.mapContainer.classList.toggle("extend");
  }

  //method to filter user input passed into <LocationFilter> component
  filterLocationsOnUserInput = (query) => {
    this.setState({query: query});
  }

  //method to update selected place's id in state
  placeClicked = (id) => {
    this.setState({selectedLocationId: id});
  }

  render() {
    return (
      <div className="App">

        <Header toggleMenu={this.toggleMenu}/>

        <main className="app_main">
          <nav className="nav_menu">
            <LocationsFilter filterLocationsOnUserInput={this.filterLocationsOnUserInput} query={this.state.query}/>
            <LocationsList  locationsDisplayed={locationData} query={this.state.query} placeClicked={this.placeClicked} selectedLocationId={this.state.selectedLocationId}/>
          </nav>
          <div id="map" className="map_container">
            <MapContainer allLocations={locationData} placeClicked={this.placeClicked} selectedLocationId={this.state.selectedLocationId} query={this.state.query}/>
          </div>
        </main>

        <Footer />

      </div>
    );
  }
}

export default App;
