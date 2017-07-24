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
      return reply;
    })
    .catch(err => console.error(err));
};
