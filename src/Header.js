import React from 'react';

class Header extends React.Component {

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
		<header className="app_header">
	      <button className="menu_icon">
	        <img alt="Hamburger menu button" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACQSURBVGhD7ZaxCYBAEASvOk2sxCKMBAUrMLMGe1AwNxLE0NQKVB4/MPj4j9MZmHw3uGMFAAAgqcYircfWki6zjy+SNdOSd/NV9qsJXVaX2cd/CnTDfm3HaUKXlQKafrOA6SM2/0YB/g5bKLJsIW0poG2wAFsosmwhgBdsociyhbSlgLbBAmyhyLKFAABAROQG88ei5Eh4TwUAAAAASUVORK5CYII=" />
	      </button>
	      <h1 className="title">Patra City Neighborhood Map App</h1>
	    </header>
	)
  }
	
}

export default Header;