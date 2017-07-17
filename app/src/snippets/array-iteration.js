console.dir(`
--- Array.prototype.keys() ---
`);

// the range-generator magic trick:

let range;

console.info('zero-based:');

range = [...Array(7).keys()];
console.log(range);
console.dir();

console.info('start offset of 10:');

[,,,,,,,,,, ...range] = [...Array(14).keys()];
console.log(range);
console.dir();

// what's going on:
// 1. a new array is created, with N empty slots
// 2. keys() returns an iterator with N index numbers as its values
// 3. the spread shallow-copies them onto a new array
