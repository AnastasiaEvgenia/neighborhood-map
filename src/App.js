import React, { Component } from 'react';
import './App.css';
import MapContainer from './MapContainer.js';

class App extends Component {

  //add event listener to toggle menu 
  componentDidMount() {
    const menuButton = document.querySelector(".menu_icon");
    menuButton.addEventListener('click', () => {
      const navigation = document.querySelector(".nav_menu");
      const mapContainer = document.querySelector("#map");
      navigation.classList.toggle("hidden");
      mapContainer.classList.toggle("extend");
    });

    //event lister for changes in viewport
    window.addEventListener('resize', () => {
      this.displayMenu();
    });
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


  render() {
    return (
      <div className="App">

        <header className="app_header">
          <button className="menu_icon">
            <img alt="Hamburger menu button" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACQSURBVGhD7ZaxCYBAEASvOk2sxCKMBAUrMLMGe1AwNxLE0NQKVB4/MPj4j9MZmHw3uGMFAAAgqcYircfWki6zjy+SNdOSd/NV9qsJXVaX2cd/CnTDfm3HaUKXlQKafrOA6SM2/0YB/g5bKLJsIW0poG2wAFsosmwhgBdsociyhbSlgLbBAmyhyLKFAABAROQG88ei5Eh4TwUAAAAASUVORK5CYII=" />
          </button>
          <h1 className="title">Patra City Neighborhood Map App</h1>
        </header>

        <main className="app_main">
          <nav className="nav_menu">
            <form>
              <div className="filter_form">
                <input list="categories" type="text" placeholder="Filter locations.." aria-label="Filter through locations"/>
                <datalist id="categories">
                  <option value="Cafe"/>
                  <option value="Theater"/>
                  <option value="Restaurant"/>
                  <option value="Super Market"/>
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
