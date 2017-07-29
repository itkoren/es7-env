
console.dir(`
--- Set ---
`); // a non-indexed, ordered collection of unique elements

console.info(`operations
`);

let set = new Set();

set.add('red');
console.log(`'red' was added:`, set);

let has = set.has('red');
console.log(`set has 'red': ${has}`);

let deleted = set.delete('red');
console.log(`'red' was deleted: ${deleted}`);

has = set.has('red');
console.log(`set has 'red': ${has}`);

set.add('green');
set.add('blue');
console.log(`'green' and 'blue' were added:`, set);

let size = set.size; // why not 'length'? ...
console.log(`set size: ${size}`);

set.clear();
console.log(`set was cleared`);

size = set.size;
console.log(`new size: ${size}`);
console.dir();

// where is 'get()'? ...

console.info(`construction
`);

console.info('by passing an iterable:');

set = new Set([1, 2, 3]);
console.log('array:', set);

set = new Set('123');
console.log('string:', set);

set = new Set(document.querySelectorAll('div'));
console.log(`node list (show set size): ${set.size}`);
console.dir();

console.info('by chaining add():');

set = new Set().add(1).add(2).add(3);
console.log(set);
console.dir();


console.info(`iteration
`);

console.info(`with forEach:`);

set = new Set(['papa', 'was', 'a', 'rolling', 'stone']);
set.forEach((v) => console.log(v));
console.dir();

console.info(`with for..of:`);

set = new Set([`i'm`, `your`, `pusherman`]);
for (const v of set) {
  console.log(v);
}
console.dir();

console.info(`convert to array and back:`);

set = new Set([
  'none', 'of', 'us', 'are', 'free',
  'none', 'of', 'us', 'are', 'free',
]);
let arr = [...set];
set = new Set(arr);
console.log(set);
console.log(`arr is Array? ${Array.isArray(arr)}`);
console.log(`set is Set? ${Set.prototype.isPrototypeOf(set)}`);
console.dir();

console.info('a set can be used to remove duplicates:');

const dedupe = (iterable) => [...new Set(iterable)];

let from, to;

from = [1, 1, 2, 5, 1, 2, 2];
to = dedupe(from);
console.log(`array: ${from} -> ${to}`);

from = 'hotshots';
to = dedupe(from).join('');
console.log(`string: ${from} -> ${to}`);
