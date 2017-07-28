/*global Promise*/
/* esprima no-validate */
'use strict';

console.log('');
console.log('Processing Async Await:');
console.log('');

const return123 = async() => {
  return 123;
};
const throwError = async() => {
  throw new Error('Something went wrong!!!');
};
const requestPosts = async() => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  return fetch(url);
};

/* eslint-disable */
/*
try {
  await return123();
} catch(ex) {
  console.log(ex);
}
*/
/* eslint-enable */

const execution = async() => {
  const result1 = await return123();
  const result2 = await (await requestPosts()).json();

  let result3;

  try {
    result3 = await throwError();
  } catch(ex) {
    result3 = ex.message;
  }

  console.log({
    result1,
    result2,
    result3
  });
};

execution();

const asyncAwaitFetch = async() => {
  const address1Url = 'https://maps.googleapis.com/maps/api/geocode/json?address=Zarhin+13,Ra%27anana&key=AIzaSyA2jEDArRkBCHbLn5frUC5Zto9v2b2J_kU';
  const address2Url = 'https://maps.googleapis.com/maps/api/geocode/json?address=475+10th+Ave,New+York&key=AIzaSyA2jEDArRkBCHbLn5frUC5Zto9v2b2J_kU';
  const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=dd17bb3295377767763841a89bab74fb'

  const addressesResponse = await Promise.all([fetch(address1Url), fetch(address2Url)]); // Parallel
  const address1 = await addressesResponse[0].json();
  const address2 = await addressesResponse[1].json();
  const latitude1 = address1.results[0].geometry.location.lat;
  const longtitude1 = address1.results[0].geometry.location.lng;
  const latitude2 = address2.results[0].geometry.location.lat;
  const longtitude2 = address2.results[0].geometry.location.lng;
  const weather1 = await (await fetch(`${weatherUrl}&lat=${latitude1}&lon=${longtitude1}`)).json(); // Sequential
  const weather2 = await (await fetch(`${weatherUrl}&lat=${latitude2}&lon=${longtitude2}`)).json(); // Sequential

  console.log('');
  console.log('##########################');
  console.log('##########################');
  console.log('##########################');
  console.log('');

  console.log({
    weather1,
    weather2
  });
};

asyncAwaitFetch();
