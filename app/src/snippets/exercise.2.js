/*global Symbol*/
'use strict'

const max = 50; // eslint-disable-line no-unused-vars
const SevenBoom = {
  [Symbol.iterator]:() => {
    // Your Code Here
    // Here belongs the 7 Boom logic
    // Hint：
    // When it's finished you have to return an object
    // with the property `done: true` but before you
    // have to set `done: false`
  }
};

for (let num of SevenBoom) {
  console.log(num);
}
