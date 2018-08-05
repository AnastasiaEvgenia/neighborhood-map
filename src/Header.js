import React from 'react';

class Header extends React.Component {

  componentDidMount() {
    const menuButton = document.querySelector(".menu_icon");
    //Event listener to toggle menu view, when hamburger icon is clicked.
    menuButton.addEventListener('click', this.props.toggleMenu);    
  }

  render() {
  	return (
		<header className="app_header">
	      <button className="menu_icon">
	        <img 
	        	alt="Hamburger button to toggle menu." 
	        	src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACQSURBVGhD7ZaxCYBAEASvOk2sxCKMBAUrMLMGe1AwNxLE0NQKVB4/MPj4j9MZmHw3uGMFAAAgqcYircfWki6zjy+SNdOSd/NV9qsJXVaX2cd/CnTDfm3HaUKXlQKafrOA6SM2/0YB/g5bKLJsIW0poG2wAFsosmwhgBdsociyhbSlgLbBAmyhyLKFAABAROQG88ei5Eh4TwUAAAAASUVORK5CYII="
	        />
	      </button>
	      <h1 className="title">Patra City Neighborhood Map App</h1>
	    </header>
	)
  }
	
}

export default Header;