console.dir();
console.info('--- Array.prototype.find() ---');
console.dir();
// retrieves the first value that satisfies the predicate

const ø = Object.create(null);


console.info('find a value:');

const integers = [1, 2, 10, 30, 100];

const above10 = (n) => n > 10;
const equals20 = (n) => n === 20;

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

console.log(
  guitars.find(prop.bind(ø, 'strings', 6))
);


console.dir();
console.info('--- Array.prototype.findIndex() ---');
console.dir();

console.info(`find an object's index by property:`);

console.log(
  guitars.findIndex(prop.bind(ø, 'strings', 6))
);


console.dir();
console.info('--- Array.prototype.includes() ---');
console.dir();

const letters = ['a', 'b', 'c'];

console.log(letters.includes('b'));
console.log(letters.includes('b', 2));
console.log(letters.includes('b', -2));
