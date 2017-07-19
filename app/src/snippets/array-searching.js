console.dir(`
--- Array.prototype.find() ---
`); // retrieves the first value that satisfies the predicate

console.info('find a value:');

const integers = [1, 2, 10, 30, 100];

const above10 = n => n > 10;
const equals20 = n => n === 20;

console.log(integers.find(above10));
console.log(integers.find(equals20));
console.dir();


console.info('find an object by property:');

let guitars = [
  { name: 'ibanez', strings: 7 },
  { name: 'fender', strings: 6 },
  { name: 'gibson', strings: 6 },
];

const prop = (name, value, obj) => obj[name] === value;

const ø = Object.create(null);

const sixStrings = prop.bind(ø, 'strings', 6);
const threeStrings = prop.bind(ø, 'strings', 3);

console.log(guitars.find(sixStrings));
console.log(guitars.find(threeStrings));


console.dir(`
--- Array.prototype.findIndex() ---
`);

console.info(`find an object's index by property:`);

console.log(guitars.findIndex(sixStrings));
console.log(guitars.findIndex(threeStrings));
console.dir();

console.info('the notorious NaN:');

const nanArray = [NaN];

// indexOf() fails here, since it uses strict equality under the hood, and NaN === NaN -> false
console.log(nanArray.indexOf(NaN));

// let's compare with Object.is to remedy this
const isNan = n => Object.is(n, NaN);
console.log(nanArray.findIndex(isNan));


console.dir(`
--- Array.prototype.includes() ---
`);

const letters = ['a', 'b', 'c'];

console.log(letters.includes('b'));
console.log(letters.includes('b', 2));
console.log(letters.includes('b', -2));
console.dir();

console.info('includes() is also good at finding NaNs:');
console.log([NaN].includes(NaN));
console.dir();

console.info('like many other methods, it is generic:');
console.log([].includes.call('abc', 'b')); // 'this' doesn't have to be an array
console.dir();
