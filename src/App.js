import React, { Component } from 'react';
import './App.css';
import locationData from './data.js';
import Header from './Header.js';
import LocationsFilter from './LocationsFilter.js';
import LocationsList from './LocationsList.js';
import MapContainer from './MapContainer.js';
import Footer from './Footer.js';

class App extends Component {

  state = {
    query: '', //Refers to user input in search field.
    selectedLocationId: '' //Refers to special id number from Foursquare API.
  }

  componentWillMount() {
    this.setState({online: navigator.onLine});
  }

  componentDidMount() {
    this.navigation = document.querySelector(".nav_menu");
    this.mapContainer = document.querySelector("#map");
    this.displayMenu();
  }

  //Method that toggles menu view, passed into <Header/> component.
  toggleMenu = () => {
    this.navigation.classList.toggle("hidden");
    this.mapContainer.classList.toggle("extend");
  }

  //Method to display menu view by default. Menu is closed when screen width is below 560px and open for bigger.
  displayMenu = () => {
    if (window.screen.width < 560) {
      this.navigation.classList.add("hidden");
      this.mapContainer.classList.add("extend");
    } else {
      this.navigation.classList.remove("hidden");
      this.mapContainer.classList.remove("extend");
    }
  }

  //Method to filter user input and update state, passed into <LocationFilter> component.
  filterLocationsOnUserInput = (query) => {
    this.setState({ query: query });
  }

  //Method to update selected place's id in state, passed into <LocationsList/> and <MapContainer/> components.
  placeClicked = (id) => {
    this.setState({ selectedLocationId: id });
  }

  render() {
    return (
      <div className="App">
        <Header toggleMenu={this.toggleMenu}/>
        <main className="app_main">
          <nav className="nav_menu">
            <LocationsFilter 
              filterLocationsOnUserInput={this.filterLocationsOnUserInput}
              query={this.state.query}
            />
            <LocationsList  
              locationsDisplayed={locationData}
              query={this.state.query}
              placeClicked={this.placeClicked}
              selectedLocationId={this.state.selectedLocationId}
            />
          </nav>
          {
            (this.state.online)
            ?
            <div id="map" className="map_container">
              <MapContainer 
                tabIndex="0"
                role="application"
                aria-label="Neighborhood Map, by google maps."
                allLocations={locationData}
                query={this.state.query}
                placeClicked={this.placeClicked}
                selectedLocationId={this.state.selectedLocationId}
              />
            </div>
            :
            <div id="map" style={{color: "red"}}>
              <p>Google Maps Api failed to load. Please check your iternet connection!</p>
            </div>
          }
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
