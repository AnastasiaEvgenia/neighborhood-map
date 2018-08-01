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

    this.navigation = document.querySelector(".nav_menu");
    this.mapContainer = document.querySelector("#map");

    //event lister for changes in viewport
    window.addEventListener('resize', () => {
      this.displayMenu();
    });
  }

  toggleMenu = () => {
    this.navigation.classList.toggle("hidden");
    this.mapContainer.classList.toggle("extend");
  }


  //method to display menu
  displayMenu = () => {
    if (window.screen.width < 560) {
      const navigation = document.querySelector(".nav_menu");
      const mapContainer = document.querySelector("#map");
      navigation.classList.add("hidden");
      mapContainer.classList.add("extend");
    } else {
      const navigation = document.querySelector(".nav_menu");
      const mapContainer = document.querySelector("#map");
      navigation.classList.remove("hidden");
      mapContainer.classList.remove("extend");
    }
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

        <Header toggleMenu={this.toggleMenu}/>

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
