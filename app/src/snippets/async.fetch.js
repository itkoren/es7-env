'use strict';

console.log('');
console.log('Processing Fetch API:');
console.log('');

const url = 'https://jsonplaceholder.typicode.com/posts';
fetch(url)
  .then(data => {
    for (const key in data) {
      console.log(`${key}:${JSON.stringify(data[key])}`);
    }
  });

