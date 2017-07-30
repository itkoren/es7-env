/*

unlike arrays, sets and maps don’t have the map() and filter() methods.
we can work around this like so:

1. convert the collection into an array
2. apply map() or filter() to the array
3. convert the result back to a collection

*/

console.dir(`
--- collections polymorphic operations ---
`);

let from, to;

from = new Set([1, 2, 3, 4, 5]);

console.info('using filter() on a set:');

to = new Set([...from].filter(x => (x % 2) === 0));
console.log(from, '->', to, '\n');

console.info('using map() on a set:');

to = new Set([...from].map(x => x * 2));
console.log(from, '->', to, '\n');


from = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');

console.info('using filter() on a map:');

to = new Map(
  [...from].filter(([k, v]) => k < 3)
);
console.log(from, '->', to, '\n');

console.info('using map() on a map:');

to = new Map(
  [...from].map(([k, v]) => [k * 2, v.repeat(2)])
);
console.log(from, '->', to, '\n');



console.dir(`
- generic variation -
`);

// an array visitor for collections
const visitor = (method, struct, ...args) => {
  let Type = Object.getPrototypeOf(struct).constructor;
  return new Type([...struct][method](...args));
};

console.info('using map() on a map:');

to = visitor('map', from, ([k, v]) => [k, v.repeat(4)]);
console.log(from, '->', to, '\n');


console.dir(`
- implement basic set operations -
`);

let set1, set2, result;

set1 = new Set([1,2,3]);
set2 = new Set([2,3,4]);

console.log('set 1:', set1);
console.log('set 2:', set2, '\n');


let intersection = (a, b) => {
  return visitor('filter', a, (x) => b.has(x));
};

result = intersection(set1, set2);
console.log('intersection:', result);


let difference = (a, b) => {
  return visitor('filter', a, (x) => !b.has(x));
};

result = difference(set1, set2);
console.log('difference:', result);


let union = (a, b) => visitor('concat', a, [...b]);

result = union(set1, set2);
console.log('union:', result);

// union can also be written like so:
console.debug('union:', new Set([...set1, ...set2]));


