[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/nyc-firehouses?style=flat-square)](/LICENSE.txt)
## NYC Firehouses

List of firehouses in New York City pulled from NYC Open Data and built with Vue.js, Express.js, and Node.js. Firehouses can be filtered by borough, postal code, or neighborhood. Each firehouse listing includes an area map. [View working component](https://nyc-firehouses.herokuapp.com). It's on a Heroku "eco-dyno" and may take a few seconds to "wake up."

## Project Status

This project is currently in development and nearing completion. 

## Project Screen Shot(s)

* Starting view - message from Commissioner
![screen shot of project](/screenshots/nyc-firehouses-screenshot1.png?s=600)

* View - firehouses in Manhattan.
![screen shot of project](/screenshots/nyc-firehouses-screenshot2.png?s=600)

* View - Brooklyn firehouses, postal code 11216.
![screen shot of project](/screenshots/nyc-firehouses-screenshot3.png?s=600)

* View - Queens firehouses, Fresh Meadows neighborhood.
![screen shot of project](/screenshots/nyc-firehouses-screenshot3.png?s=600)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine. The Express server uses the Fetch API. You will need a later version of Node (18+) for this to work. 

Installation:

`npm install`  

To Run Vue:  

`npm run dev`  

To Start the Express server:

`npm run start`  

To Visit App:

Visit the localhost port displayed in the terminal after running `npm run dev`. You may need to disable your browser's Cross-Origin Restrictions.

## Reflection

Reflection to come.

## Acknowledgments

* Firehouse data from [NYC Open Data](https://data.cityofnewyork.us/Public-Safety/FDNY-Firehouse-Listing/hc8x-tcnd).
* Postal code and neighborhood information from [United Hospital Fund](https://www1.nyc.gov/assets/doh/downloads/pdf/ah/zipcodetable.pdf).
* Portrait of Laura Kavanagh from the [FDNY](https://www.nyc.gov/site/fdny/about/overview/leadership/fire-commissioner.page).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* Linting guidance from [ESLint](https://eslint.org) and [Stylelint](https://stylelint.io).
* Design guidance and icons from Google's [Material Design](https://material.io/design).
* Accessibility guidance from [Chrome's](https://www.google.com/chrome/) Lighthouse and [Firefox's](https://www.mozilla.org/en-US/firefox/new/) Accessibility Tools.
* Design guidance from Google's [Material Design](https://material.io/design).
* Shields from [Shields](https://shields.io).
