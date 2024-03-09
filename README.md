[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/nyc-firehouses?style=flat-square)](/LICENSE.txt)
## NYC Firehouses

Map of firehouses in New York City built with Vue.js and Mapbox. [View working component](https://sean-kelliher-nyc-firehouses.netlify.app).

## Project Screen Shot(s)

* Map with firehouse in Queens selected.
![screen shot of project](/screenshots/nyc-firehouses-screenshot1.png?s=600)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`  

To Run Vue:

`npm run dev`   

To Visit App:

Visit the localhost port displayed in the terminal after running `npm run dev`.

## Reflection

My goal was to build an app that allows NYC residents to quickly locate firehouses. I experimented with numerous ways. At first, I built a filtering system that let users search by neighborhood and zip code. This worked okay, but neighborhood names often lack clear boundaries. This can lead to confusion. With zip codes, people usually know their own zip code but what happens if they want to explore other areas? They would likely need to guess zip codes or consult another source for reference. In the end, a map seemed to be the best method.

I retrieved data from Open Data NYC and built the GeoJSON file MapBox needed from it. I considered trying to generate a GeoJSON file "on the fly" from Open Data NYC, but it added complexity. Since firehouse locations rarely change, manually building the GeoJSON file seemed to be a much easier and stable solution.

A final challenge was deploying to Netlify and trying to use an environmental variable for Mapbox's access token. The deploy kept failing as Mapbox was unable to read its access token hidden in Netlify's environmental variable. As a work-around, I exposed the access token and restricted its usage to only work if a request originates from the app's Netlify URL. I'm grateful to Mapbox for having this very useful security feature.

## Acknowledgments

* Firehouse data from [NYC Open Data](https://data.cityofnewyork.us/Public-Safety/FDNY-Firehouse-Listing/hc8x-tcnd).
* FDNY logo [Wikimedia](https://en.m.wikipedia.org/wiki/File:Emblem_of_the_New_York_City_Fire_Department.svg).
* NYC logo [Wikimedia](https://en.wikipedia.org/wiki/File:NYC_Logo_Wolff_Olins.svg).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* Linting guidance from [ESLint](https://eslint.org) and [Stylelint](https://stylelint.io).
* Design guidance and icons from Google's [Material Design](https://material.io/design).
* Accessibility guidance from [Chrome's](https://www.google.com/chrome/) Lighthouse and [Firefox's](https://www.mozilla.org/en-US/firefox/new/) Accessibility Tools.
* Shields from [Shields](https://shields.io).