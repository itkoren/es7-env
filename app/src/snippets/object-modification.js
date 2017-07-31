
let obj;

console.dir(`
--- Object.assign ---
`); // copy values from one or more source objects to a target object

// - the values are only those of enumerable own properties
// the copy is shallow: it's copy-by-value, so references are copied, not followed
// - the copy is made by assignment: the target setters and source getters are invoked
// - this make assign() unsuitable for copying actual property getters, or property definitions (including their enumerability) into prototypes

obj = {
  1: 2,
  [Symbol('key')]: 'value',
  obj: {
    nested: true
  },
};

console.info('copy everything into an empty object:');

const assigned = Object.assign({}, obj);
console.log('obj:');
console.dir(assigned); // symbols not shown due some logger limitation
console.log('all keys:');
console.dir(Reflect.ownKeys(assigned), '\n');

console.info(`show it's a shallow copy:`);
console.log(Object.is(obj.obj, assigned.obj), '\n');


// for deep-cloning, use the good old JSON.parse(JSON.stringify()):

console.info('true deep cloning:');

const clone = JSON.parse(JSON.stringify(obj));
const depth = Object.is(obj.obj, clone.obj) ? 'shallow' : 'deep';
console.log(`clone be like, i'm ${depth}, biatch!
`);


// to copy property definitions, use this technique instead of assign():

function prototypeShallowClone(o) {
  return Object.create(
    Object.getPrototypeOf(o),
    Object.getOwnPropertyDescriptors(o)
  );
}



console.dir(`
--- Object.freeze ---
`); // prevents mutation of the properties and prototype of a given object

// - new properties cannot be added
// - existing properties cannot be removed
// - existing properties, or their enumerability, configurability, or writability, cannot be changed
// - the prototype cannot be changed
// - accessor properties seemingly work the same, but setters has no effect (but may throw errors)
// - objects get a shallow-freeze: objects nested inside them can be changed, unless frozen too


obj = {
  foo: 'wat',
};

Object.freeze(obj);

if (Object.isFrozen(obj)) {
  console.log(`frozen:`, obj, '\n');
}

console.info('attempt to assign a value:');
try {
  obj.foo = true;
} catch (ex) {
  console.error(ex, '\n');
}

console.info('attempt to change the prototype:');
try {
  obj.__proto__ = { x: 20 };
} catch (ex) {
  console.error(ex, '\n');
}

// it's the same with arrays (they're objects, too)

let arr = Object.freeze([0]);

console.info('attempt to add an item to a frozen array:');
try {
  arr.push(1);
} catch (ex) {
  console.error(ex, '\n');
}



console.dir(`
--- Object.setPrototypeOf ---
`); // sets the internal [[prototype]] property of a given object

// it's es6's canonical way of setting an object's dunder-proto (thanx, ned batchelder):
// obj.__proto__ = proto

// don't do it!
// - it's very slow, due to how engines optimize property accesses
// - its slowness is contagious! the performance penalty may extend to any code that has access to any altered object

obj = Object.setPrototypeOf({}, String.prototype);
if (String.prototype.isPrototypeOf(obj)) {
  console.warn(`prototype changed using setPrototypeOf
`);
}

// use Object.create() instead:

obj = Object.create(Number.prototype);
if (Number.prototype.isPrototypeOf(obj)) {
  console.success(`prototype set using Object.create
`);
}

