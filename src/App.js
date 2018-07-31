import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer.js';
import locationData from './data.js';
import Header from './Header.js';

class App extends Component {

  render() {
    return (
      <div className="App">

        <Header />

        <main className="app_main">
          <nav className="nav_menu">
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
            <ul className="locations_list">
              <li>Coffee Island</li>
              <li>Masasouras</li>
              <li>Gonia tou Mpampi</li>
              <li>Arxaio Odeio</li>
              <li>Basilopoulos</li>    
            </ul>
          </nav>
          <div id="map" className="map_container">
            <MapContainer />
          </div>
        </main>

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

      </div>
    );
  }
}

export default App;
