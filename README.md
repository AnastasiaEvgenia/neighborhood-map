# Patra City Neighborhood Map App

## Introduction.

[This](https://anastasiaevgenia.github.io/neighborhood-map/) is a project 
for the Udacity Front-End Web Developer Nanodegree program. The objective
of the project is to develop a single page application using React.

## App Description.

The application features a map of a neighborhood in Patra, Greece. User can
choose from a number of locations of interest and display information about
them. The locations are displayed in a list menu and can be filtered by using
the search field or by choosing a category (cafe, candy store, restaurant, bar).
Using the search input also filters the markers on the map and displays the ones matching
the user input. Information for the choosen location is displayed on an infowindow
above the marker presented in the map.

## Running the App

1. Running localy the pre-build version. (Service worker provided by React
   is not working when running this version of the app.)
	* Clone the GitHub repository localy and go to root project folder.
	* Install all project dependencies with `npm install`.
	* Start the development server with `npm start`.
	* Open `http://localhost:3000/` in your browser.

2. Running the production version in Github pages. (Service worker runs effectively.)
	* Using this link: https://anastasiaevgenia.github.io/neighborhood-map/

3. Running the build version localy. (Service worker runs effectively.)
	* Follow steps mentioned in running the pre-build version.
	* Remove the "homepage" reference from package.json file.
	* Build the application using `npm run build`.
	* Install an http server using `npm install -g serve`.
	* Run the server from build application using `serve -s build`.
	* App runs at `http://localhost:5000/`.

## Dependencies

This application is using the above npm packages:
	1. [create-react-app](https://www.npmjs.com/package/create-react-app)
	2. [google-maps-react](https://www.npmjs.com/package/google-maps-react)
	3. [gh-pages](https://www.npmjs.com/package/gh-pages)
	4. [webpack](https://www.npmjs.com/package/webpack)
	5. [serve](https://www.npmjs.com/package/serve)

_Special thanks to [Alexandris George](https://github.com/gfa61-ga) for tutoring
and helping me throughout the course of this project._

## License

This code is distributed under the MIT license.

