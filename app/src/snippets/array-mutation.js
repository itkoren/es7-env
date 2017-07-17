let altered;

console.dir();
console.info('--- Array.prototype.copyWithin() ---');
console.dir();
// shallow-copies part of an array to another location in the same array

const arrows = ['❮', '❯', '❯', '❯'];
const len = arrows.length;
altered = arrows.copyWithin(1);

console.log(altered);
// length is maintained
console.log(arrows.length === len);
console.dir();

const line = ['everything you own in a box', 'to the left'];
altered = line.copyWithin(0, -1);

console.log(altered);
// the same instance is returned
console.log(line === altered);
