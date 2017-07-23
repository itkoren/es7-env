/*global Promise*/
'use strict';

console.log('');
console.log('Processing Promises:');
console.log('');

// This will be rejected
let promise = new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars, no-undef
  setTimeout(() => reject(), 500);
})
  .then(() => console.log('Finally Resolved Successfully!'))
  .then(() => console.log('I was also executed upon success!'))
  .catch(() => console.log('OH NO!!!!'));



// This will be successfully resolved
promise = new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars, no-undef
  setTimeout(() => resolve(), 1000);
})
  .then(() => console.log('Finally Resolved Successfully!'))
  .then(() => console.log('I was also executed upon success!'))
  .catch(() => console.log('OH NO!!!!'));



// Promise.all
const fulfillsAll = Promise.all([
  new Promise(resolve => setTimeout(resolve, 3000, 'foo')),
  new Promise(resolve => setTimeout(resolve, 2000, 'bar'))
]);

const rejectsAll = Promise.all([
  new Promise((resolve, reject) => setTimeout(reject, 3000, 'baz')), // eslint-disable-line no-unused-vars
  new Promise((resolve, reject) => setTimeout(reject, 2000, 'qux'))  // eslint-disable-line no-unused-vars
]);

let scoreAll = 0;
fulfillsAll.then(result => {
  scoreAll += (`${result}` === 'foo,bar');
  check(scoreAll);
});

rejectsAll.catch(result => {
  scoreAll += (result === 'qux');
  check(scoreAll);
});

function check(score) {
  console.log(`SCORE: ${score}`);
  if (score === 2) {
    asyncCompleted();
  }
}

function asyncCompleted() {
  console.log('Async Completed!!!');
}



// Promise.race
const fulfillsRace = Promise.race([
  new Promise(resolve => setTimeout(resolve, 4000, 'foo')),
  new Promise((resolve, reject) => setTimeout(reject, 4000, 'bar')) // eslint-disable-line no-unused-vars
]);

const rejectsRace = Promise.race([
  new Promise((resolve, reject) => setTimeout(reject, 4000, 'baz')), // eslint-disable-line no-unused-vars
  new Promise(resolve => setTimeout(resolve, 4000, 'qux'))
]);

let scoreRace = 0;
fulfillsRace.then(result => {
  scoreRace += (result === 'foo');
  check(scoreRace);
});

rejectsRace.catch(result => {
  scoreRace += (result === 'baz');
  check(scoreRace);
});
