/*global Promise*/
'use strict';

console.log('');
console.log('Processing Fetch API:');
console.log('');

const url = 'https://jsonplaceholder.typicode.com/posts';
fetch(url)
  .then(reply => {
    console.log(reply.toString());
    console.log('');
    console.log('');
    for (const key in reply) {
      console.log(`${key}:${JSON.stringify(reply[key])}`);
    }
    console.log('');
    console.log('');
    return reply;
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .then(() => {
    console.log('');
    console.log('##########################');
    console.log('##########################');
    console.log('##########################');
    console.log('');

    whyLikeThis();
  });




console.log('');
console.log('##########################');
console.log('##########################');
console.log('##########################');
console.log('');


const whyLikeThis = () => {
  //const url = 'https://jsonplaceholder.typicode123.com/posts';

  fetch(`${url}1234`)
    .then(reply => {
      console.log(reply.toString());
      console.log('');
      console.log('');
      for (const key in reply) {
        console.log(`${key}:${JSON.stringify(reply[key])}`);
      }
      console.log('');
      console.log('');

      showMagic();
      return reply;
    })
    .catch(err => console.error(err));
};



const generatorFetch = function*() {
  const addressUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=Zarhin+13,Ra%27anana&key=AIzaSyA2jEDArRkBCHbLn5frUC5Zto9v2b2J_kU';
  const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=dd17bb3295377767763841a89bab74fb'

  const addressResponse = yield fetch(addressUrl);
  const address = yield addressResponse.json();
  const latitude = yield address.results[0].geometry.location.lat;
  const longtitude = yield address.results[0].geometry.location.lng;
  const weatherResponse = yield fetch(`${weatherUrl}&lat=${latitude}&lon=${longtitude}`);
  const weather = yield weatherResponse.json();

  console.log(weather);

  return weather;
}

function showMagic() {
  const genWeather = generatorFetch();
  assistant(genWeather)
    .then(result => console.log('DONE', result))
    .catch(err => console.error(err));
}


// Fetch has two phases
// Fetch is not using error for HTTP error codes
// Fetch cannot be cancelled



function assistant(generator) {
  return new Promise((resolve, reject) => {
    remind(() => generator.next());

    function remind(resume) {
      let next;

      try {
        next = resume();
      } catch(err) {
        reject(err);
        return;
      }
      if (next.done) {
        resolve(next.value);
        return;
      }

      const promise = Promise.resolve(next.value);
      promise
        .then(result => remind(() => generator.next(result)))
        .catch(err => remind(() => generator.throw(err)));
    }
  });
}
