'use strict';

console.log('');
console.log('Processing Async Functions:');
console.log('');

const return123 = async() => {
  return 123;
};

console.log(return123().toString());

return123()
  .then(result => console.log(result));


console.log('');
console.log('##########################');
console.log('##########################');
console.log('##########################');
console.log('');


const throwError = async() => {
  throw new Error('Something went wrong!!!');
};

throwError()
  .catch(err => console.log(err));


setTimeout(() => {
  console.log('');
  console.log('##########################');
  console.log('##########################');
  console.log('##########################');
  console.log('');
}, 0);


const requestPosts = async() => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  return fetch(url);
};

requestPosts()
  .then(response => response.json())
  .then(data => console.log(data));
