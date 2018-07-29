import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="app_header">
          <a href="#nav_menu">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACQSURBVGhD7ZaxCYBAEASvOk2sxCKMBAUrMLMGe1AwNxLE0NQKVB4/MPj4j9MZmHw3uGMFAAAgqcYircfWki6zjy+SNdOSd/NV9qsJXVaX2cd/CnTDfm3HaUKXlQKafrOA6SM2/0YB/g5bKLJsIW0poG2wAFsosmwhgBdsociyhbSlgLbBAmyhyLKFAABAROQG88ei5Eh4TwUAAAAASUVORK5CYII=" />
          </a>
          <h1 className="title">Patra City Neighborhood Map App</h1>
        </header>

        <main className="app_main">
          <nav id="nav_menu">
            <form>
              <div  className="filter_form">
                <input type="search" name="q" placeholder="Filter locations.." aria-label="Filter through locations"/>
                <button>Search</button>
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
          <div id="map" className="map_container"></div>
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
