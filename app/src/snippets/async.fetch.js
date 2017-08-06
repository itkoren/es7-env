/*global Promise Uint8Array*/
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

const generatorFetch = function* () {
  const addressUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=Zarhin+13,Ra%27anana&key=AIzaSyA2jEDArRkBCHbLn5frUC5Zto9v2b2J_kU';
  const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=dd17bb3295377767763841a89bab74fb'

  const addressResponse = yield fetch(addressUrl);
  const address = yield addressResponse.json();
  const latitude = yield address.results[0].geometry.location.lat;
  const longtitude = yield address.results[0].geometry.location.lng;
  const weatherResponse = yield fetch(`${weatherUrl}&lat=${latitude}&lon=${longtitude}`);
  const weather = yield weatherResponse.json();

  console.log(weather);

  setTimeout(() => {
    console.log('');
    console.log('##########################');
    console.log('##########################');
    console.log('##########################');
    console.log('');

    readBodyStream();
  }, 500);

  return weather;
}

function showMagic() {
  const genWeather = generatorFetch();
  assistant(genWeather)
    .then(result => console.log('DONE', result))
    .catch(err => console.error(err));
}

function readBodyStream() {
  fetch('https://output.jsbin.com/pigawo.js').then(response => {
    console.log('Got headers');
    const reader = response.body.getReader();
    const returnCellAfter = 'Jake';
    const decoder = new TextDecoder();
    let partialCell = '';
    let returnNextCell = false;

    function search() {
      return reader.read().then(result => {
        console.log('Reading chunk…');
        partialCell += decoder.decode(result.value || new Uint8Array, {
          stream: !result.done
        });

        var cellBoundry = /(?:,|\r\n)/;
        var completeCells = partialCell.split(cellBoundry);

        if (!result.done) {
          // last cell may not be complete
          partialCell = completeCells[completeCells.length - 1];
          completeCells = completeCells.slice(0, -1);
        }

        for (var cell of completeCells) {
          cell = cell.trim();

          if (returnNextCell) {
            console.log(`Got the result! The value after 'Jake' is ${cell}`);
            console.log('Closing stream…');
            reader.cancel('No more reading needed.');
            return cell;
          }

          if (cell === returnCellAfter) {
            console.log(`Found ${returnCellAfter} - getting next cell`);
            returnNextCell = true;
          }
        }

        if (result.done) {
          throw Error(`Could not find value after ${returnCellAfter}`);
        }

        return search();
      });
    }

    return search();
  }).then(() => {
    console.log('Done');
  }).catch(err => {
    console.log(`Error: ${err.message}`);
    throw err;
  });
}

// Fetch has two phases - 1) Get the response stream, 2) Read the stream content
// Fetch is not using error for HTTP error codes
// Fetch cannot be aborted - In Canary, the stream can be cancelled (after the headers have arrived)
// Fetch does not implement Progress Events
// Fetch does not allow synchronous requests (Actually, a good thing)



function assistant(generator) {
  return new Promise((resolve, reject) => {
    remind(() => generator.next());

    function remind(resume) {
      let next;

      try {
        next = resume();
      } catch (err) {
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
