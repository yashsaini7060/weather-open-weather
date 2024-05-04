'use strict';

export const weekDayNames =[
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday"
];

export const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
]
/**
 * 
 * @param {number} dateUnix Unix date in seconds
 * @param {number} timezone timezone shift from UTC in seconds
 * @returns {string} Date string format "Sunday 10, Jan"
 */
export const getDate = function (dateUnix, timezone){
  console.log(`dateUnix: ${dateUnix}, timezone:${timezone}`)
  const data = new Date((dateUnix + timezone) * 1000);
  console.log("data:", data)
  const weekDayName = weekDayNames[data.getUTCDay()];
  console.log("weekDayName",data.getUTCDay())
  const monthName = monthNames[data.getUTCMonth()];
  console.log("monthName:",data.getUTCMonth())
  console.log(`${weekDayName} ${data.getUTCDate()}, ${monthName}`)
  return `${weekDayName} ${data.getUTCDate()}, ${monthName}`; 
}


/**
 * 
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in secs
 * @returns  {string} Time string format: "HH:MM AM/PM"
 */

export const getTime = function(timeUnix, timezone){
  const date = new Date((timeUnix + timezone)*1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const period = hours >= 12 ? "PM" : "AM";
  return `${hours % 12 || 12}:${minutes} ${period}`;
}

/**
 * 
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in secs
 * @returns  {string} Time string format: "HH AM/PM"
 */


export const getHours = function(timeUnix, timezone){
  const date = new Date((timeUnix + timezone)*1000);
  const hours = date.getUTCHours();
  const period = hours >= 12 ? "PM" : "AM";
  return `${hours % 12 || 12} ${period}`;
}

/**
 * 
 * @param {number} mps Metter per second 
 * @returns {number} Kilometer per hours
 */

export const mps_to_kmh = mps => {
  const mph = mps*3600;
  return mph/1000;
}

export const aqiText = {
  1:{
    level: "Good",
    message: "Air quality is considered satisfactory, and air pollution poses little or no risk",
  },
  2:{
    level: "Fair",
    message: "Air quality is acceptable: however, for some polltants there may be modrate health concern for a very small number of people who are unusually sensitive to air pollution."
  },
  3: {
    level: "Modrate",
    message: "Member of sensitive groups may experience health effects. The general public is not likely to be affected."
  },
  4:{
    level: "Poor",
    message: "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects"
  },
  5: {
    level: "Very Poor",
    message: "Health warnings of emergency conditions. The entire population is more likely to be affected."
  }
}