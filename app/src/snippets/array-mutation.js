let altered;

const printer = (v, i) => console.log(
  `» index: ${i}, value: ${JSON.stringify(v)}`
);

console.dir(`
--- Array.prototype.fill() ---
`); // fills all the specified elements with a static value

const flags = [1,0,1,0,0];
altered = flags.fill(0);

console.log(altered);
console.log(flags);
console.dir();

// use-case: fix holes in array construction

const emptySlots = new Array(3);
const emptyStrings = (new Array(3)).fill('');

console.log('empty slots:');
emptySlots.forEach(printer);
console.log('empty strings:');
emptyStrings.forEach(printer);


console.dir(`
--- Array.prototype.copyWithin() ---
`); // shallow-copies part of an array to another location in the same array

const shapes = ['▲', '●', '●', '●'];
const len = shapes.length;
altered = shapes.copyWithin(1);

console.log(altered);
// length is maintained
console.log(altered.length === len);
console.dir();

const line = ['everything you own in a box', 'to the left'];
altered = line.copyWithin(0, -1);

console.log(altered);
// the same instance is returned
console.log(line === altered);
