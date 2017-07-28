
console.dir(`
--- Map ---
`); // data structure for value to value mapping (entry-set)

console.info(`operations
`);

let map = new Map();

map.set('foo', 1);
console.log(`'foo' was set:`, map);

let value = map.get('foo');
console.log(`got 'foo': ${value}`);

let has = map.has('foo');
console.log(`map has 'foo': ${has}`);

let deleted = map.delete('foo');
console.log(`'foo' was deleted: ${deleted}`);

has = map.has('foo');
console.log(`map has 'foo': ${has}`);

map.set('bar', true);
map.set('wat', false);
console.log(`'bar' and 'wat' were set:`, map);

let size = map.size;
console.log(`map size: ${size}`);

map.clear();
console.log(`map was cleared`);

size = map.size;
console.log(`new size: ${size}`);
console.dir();


console.info(`construction
`);

console.info('by passing an iterable of key-value pairs (2-D array):');

map = new Map([
  ['one', 1],
  ['two', 2],
  ['three', 3],
]);
console.log(map);
console.dir();

console.info('by chaining set():');

map = new Map().set('one', 1).set('two', 2).set('three', 3);
console.log(map);
console.dir();


console.info(`keys
`);

console.info('any value can be a key:');

let KEY = {};
map.set(KEY, '-object-');
console.log(map.get(KEY));

KEY = NaN;
map.set(KEY, '-nan-');
console.log(map.get(KEY));

KEY = Symbol('foo');
map.set(KEY, '-symbol-');
console.log(map.get(KEY));
console.dir();

console.info('getting an unknown key:');
value = new Map().get('!@#$%^&*');
console.log(value);
console.dir();


console.info(`iteration
`);

map = new Map([
  [true, 'yes'],
  [false, 'no'],
]);

console.info(`over keys and values:`);
for (const key of map.keys()) {
  console.log(key);
}
for (const val of map.values()) {
  console.log(val);
}
console.dir();

console.info(`over entries (explicitly):`);
[...map.entries()].forEach((e) => console.log(e));
console.dir();

console.info(`over entries (via default iterator):`);
for (const [key, val] of map) {
  console.log(`${key} -> ${val}`);
}
console.dir();

console.info(`over entries (via Map's forEach):`);
map.forEach((v, k) => console.log(`${k} -> ${v}`));
console.dir();


