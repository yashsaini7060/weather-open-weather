
'use strict'

const api_key ="92e22793faa0a44404e775685ced5d54";

export const fetchData = function(URL, callback){
  fetch(`${URL}&appid=${api_key}`)
    .then(res => res.json())
    .then(data => callback(data))
}

export const url = {
  currentWeather(lat, lon){
    console.log(lat, lon)
    return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
  },
  forecast(lat, lon){
    return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
  },
  airPollution(lat, lon){
    return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
  },
  reverseGeo(lat, lon){
    return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
  },
  geo(query){
    return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
  }
}