
// the range-generator magic trick:
const range = [...Array(7).keys()];

// what's going on:
// 1. a new array is created, with N empty slots
// 2. keys() returns an iterator with N index numbers as its values
// 3. the spread shallow-copies them onto a new array

console.log(range);
