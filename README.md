[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/nyc-firehouses?style=flat-square)](/LICENSE.txt)
## NYC Firehouses

List of firehouses in New York City pulled from NYC Open Data and built with Vue.js, Express.js, and Node.js. Firehouses can be filtered by borough, postal code, or neighborhood. Each firehouse listing includes an area map. [View working component](https://nyc-firehouses.herokuapp.com). It's on a Heroku "eco-dyno" and may take a few seconds to "wake up."

## Project Screen Shot(s)

* Starting view - message from Commissioner
![screen shot of project](/screenshots/nyc-firehouses-screenshot1.png?s=600)

* View - firehouses in Manhattan.
![screen shot of project](/screenshots/nyc-firehouses-screenshot2.png?s=600)

* View - Brooklyn firehouses, postal code 11216.
![screen shot of project](/screenshots/nyc-firehouses-screenshot3.png?s=600)

* View - Queens firehouses, Fresh Meadows neighborhood.
![screen shot of project](/screenshots/nyc-firehouses-screenshot4.png?s=600)

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

I wanted to build something using NYC Open Data. I chose the "FDNY Firehouse Listing" dataset because it was manageable in size and uncomplicated to filter. A firehouse has one location.

The dataset provided a list of firehouse names, addresses, and latitude and longitude coordinates. However, having a giant list of firehouses isn't so useful to users. They generally want to know about their local firehouse.

I consulted another source to determine the neighborhoods within each borough and the postal codes within each neighborhood. I then build a way to filter firehouses by neighborhood or postal code. To help users visualize the location, I also built a connection to Google maps. Users click on a firehouse and an area map - determined by the firehouse's latitude and longitude coordinates - opens in a new tab.

To reduce calls to the NYC Open Data server, I built the app to cache data pulled from NYC Open Data in local storage. When a user makes a request, the app first checks local storage. If the data is not present in local storage, the app then makes a request to NYC Open Data.

Lastly, this app connects to NYC Open Data using an Express server. Using Express was not technically necessary. I could have fetched data from the Vue part of the app. But using Express allowed me to hide my NYC Open Data token in an environmental variable.

## Acknowledgments

* Firehouse data from [NYC Open Data](https://data.cityofnewyork.us/Public-Safety/FDNY-Firehouse-Listing/hc8x-tcnd).
* Postal code and neighborhood information from [United Hospital Fund](https://www1.nyc.gov/assets/doh/downloads/pdf/ah/zipcodetable.pdf).
* Portrait of Laura Kavanagh from the [FDNY](https://www.nyc.gov/site/fdny/about/overview/leadership/fire-commissioner.page).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* Linting guidance from [ESLint](https://eslint.org) and [Stylelint](https://stylelint.io).
* Design guidance and icons from Google's [Material Design](https://material.io/design).
* Accessibility guidance from [Chrome's](https://www.google.com/chrome/) Lighthouse and [Firefox's](https://www.mozilla.org/en-US/firefox/new/) Accessibility Tools.
* Shields from [Shields](https://shields.io).
