console.dir(`
--- Array.prototype.keys() ---
`); // returns an iterator with the keys for each index in the array

const arr = ['a', 'b', 'c'];
const keysIter = arr.keys();

console.log(keysIter.next());
console.log(keysIter.next());
console.log(keysIter.next());
console.log(keysIter.next());
console.dir();

console.info('the keys iterator does not ignore holes:');

const sparseArr = ['a', , 'c']; // eslint-disable-line no-sparse-arrays

console.log('sparse keys:', Object.keys(sparseArr));
console.log('dense keys:', [...sparseArr.keys()]);
console.dir();


console.dir(`
--- Array.prototype.values() ---
`); // returns an iterator with the values for each index in the array

const browsers = ['chrome', 'firefox', 'ie'];
const valuesIter = browsers.values();

console.info('for..of loop on the extracted iterator:');
for (const browser of valuesIter) {
  console.log(browser);
}
console.dir();

console.info('the initial array iterator is the same as the initial values():');
for (const browser of browsers) {
  console.log(browser);
}
console.dir();


console.dir(`
--- Array.prototype.entries() ---
`); // returns an iterator with key/value pairs for each index in the array

const cats = ['sphynx', 'street', 'nyan'];

for (const [i, cat] of cats.entries()) {
  console.log(i, cat);
}
console.dir();



console.dir(`
--- the range magic trick ---
`); // javascript don't have a 'range' type, so let's make one

let range;

console.info('zero-based range:');

range = [...Array(5).keys()];
console.log(range);
console.dir();

// what's going on:
// - a new array is created, with N empty slots
// - keys() returns an iterator with N index numbers as its values (empty slots are also visited)
// - the spread operator shallow-copies them onto a new array

console.info('range with start offset of 10:');

[,,,,,,,,,, ...range] = [...Array(15).keys()];
console.log(range);
console.dir();

// what was added:
// - a zero-based range is used as the destructuring assignment input
// - a bunch of empty slots are used to discard values from the start
// - the rest operator collects all the remaining values onto a variable


console.info('the generic range generator:');

class Range {
  constructor(from, to) {
    const discardedSlots = ','.repeat(from);
    return new Function(`
      let [${discardedSlots} ...range] = [...Array(${to + 1}).keys()];
      return range;
    `)();
  }
}

range = new Range(20, 25);

console.log(range);
console.log(range instanceof Array);
console.dir();

console.info('usage with for..of loop:');

for (const index of range) {
  console.log(index);
}
