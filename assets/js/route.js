'use strict';

import {updateWeather, error404} from "./app.js";
const defaultLocation = "#/weather?lat=51.5073219&lon=-0.1276474"; //London location


const currentLocation = function(){
  window.navigator.geolocation.getCurrentPosition(res => {  
    const {latitude, longitude} = res.coords;
    updateWeather(`lat=${latitude}`,`lon=${longitude}`);
  }, err => {
    window.location.hash = defaultLocation;
  });
}


/**
 * 
 * @param {string} query Searched query
 * @returns 
 */
const searchedLocation = query => {
  console.log("Search location")
  console.log(...query.split("&"))
  updateWeather(...query.split("&"));
}

//updateWeather("lat=51.5073219", "lon=-0.1276474")


const routes = new Map([
  ["/curent-location", currentLocation],
  ["/weather", searchedLocation]
]);

const checkHash = function () {
  const requestURL = window.location.hash.slice(1);
  console.log(requestURL)
  const [route, query] = requestURL.includes ? requestURL.split("?") : [requestURL];
  console.log(route, query)
  routes.get(route) ? routes.get(route)(query) : error404();

}


window.addEventListener("hashchange", checkHash);

window.addEventListener("load", function (){
  if(!window.location.hash){
    window.location.hash = '#/current-location';
  } else{
    checkHash();
  }
})