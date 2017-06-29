// esprima no-validate
'use strict';

console.log('');
console.log('Processing Spread Operator:');
console.log('');

const parts = ['other', 'people'];
const sentence = ['I', 'love', ...parts, 'kids'];
console.log(sentence);

let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];
console.log(arr1);

const letters = ['a', 'b', ...'cde', 'f', 'g'];
console.log(letters);

const numbers = [1, 2, 3];
const print = (a, b, c) => console.log(a, b, c);
print(...numbers);

console.log(Math.min(...numbers));
console.log(Math.min(...'1975'));

const address = {
  id: '12',
  city: 'Raanana',
  country: 'Israel'
};
const name = {
  id: 'ab',
  first: 'Itai',
  last: 'Koren'
};
const person = { ...name, ...address };
console.log(person);
