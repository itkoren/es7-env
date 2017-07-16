console.dir();
console.info('--- Array.find() ---');
console.dir();
// retrieves the first value that satisfies the passed test function

const above10 = (n) => n > 10;

console.log([1, 2, 10, 30, 100].find(above10));
console.dir();

let ppl = [
  { name: 'foo', height: 175 },
  { name: 'bar', height: 275 },
  { name: 'wat', height: 375 },
];
// const prop = (name, value, obj) =>
let result = ppl.find((val, key, arr) => {
  return val.name === 'foo';
});
console.log(result);
