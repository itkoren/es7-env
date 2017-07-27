/*global Symbol*/
'use strict'

const max = 50;
const SevenBoom = {
  [Symbol.iterator]:() => {
    // Here belongs the 7 Boom logic
    // Hint：
    // When it's finished you have to return an object
    // with the property `done: true` but before you
    // have to set `done: false`
    let num = 1;

    return {
      next() {
        if (num > max) {
          return { done: true };
        }

        let value = num;
        if (value % 7 === 0) {
          value = 'Boom';
        } else if (value % 10 === 7) {
          value = 'Boom';
        }

        num += 1;
        return { done: false, value: value };
      }
    };
  }
};

for (let num of SevenBoom) {
  console.log(num);
}
