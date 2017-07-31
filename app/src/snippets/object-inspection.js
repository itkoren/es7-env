
console.dir(`
--- Object.getOwnPropertySymbols ---
`); // returns an array of an object's own property keys which are symbols (not names)


const o = {};
o[Symbol('foo')] = 'bar';
o['foo'] = 'bar';

console.info('shows only symbols:');
console.log(Object.getOwnPropertySymbols(o), '\n');

console.info('getOwnPropertyNames shows only names:');
console.log(Object.getOwnPropertyNames(o), '\n');

console.info('to get both:');
console.log(Reflect.ownKeys(o), '\n');


console.dir(`
--- Object.getOwnPropertyDescriptors ---
`); // returns an array an object's property descriptors

// a property in javascript consists of a string-valued name and a property
// descriptor, this allows us to examine the descriptors

Object.defineProperty(o, 'key', {});
Object.defineProperty(o, Symbol('key'), {});

console.info(`does not show symbol descriptors:
${prettyJson(Object.getOwnPropertyDescriptors(o))}`);


console.dir(`
--- Object.is ---
`); // provides same-value equality check

// same-value equality means determining whether two values are functionally identical in all contexts
// the behavior is equivalent to strict-equality (===), with the exception of being able to distinguish between negative-zero or NaN values

console.log('+0 is -0?', Object.is(+0, -0));
console.log('NaN is NaN?', Object.is(NaN, NaN));

console.log('+0 === -0?', +0 === -0);
console.log('NaN === NaN?', NaN === NaN);





// iteration over Object.values/Object.entries with array-extras was covered earlier, the following are examples for various input data

console.dir(`
--- Object.values ---
`); // returns an array of an object's own enumerable property values


console.info('simple object:');

let obj = { foo: 'bar', 1: 2, fn: function () {} };
console.log(Object.values(obj), '\n');


console.info('object with no own properties:');

let extendedObj = Object.create(obj);
console.log(Object.values(extendedObj), '\n');


console.info('object additional non-enumerable property:');

// second argument is similar to Object.defineProperties
extendedObj = Object.create({}, {
  getFoo: { // getFoo is not enumerable
    value: function() { return this.foo; }
  }
});
extendedObj.foo = 'bar';

console.log(Object.values(extendedObj), '\n');


console.info('array:');

let arr = [ ~~1, 2 & 2, 3 >> 3 ^ 3 ];
console.log(Object.values(arr), '\n');


console.info('array-like object:');

function argsArray() {
  return Object.values(arguments);
}
console.log(argsArray(true ^ true, true >> false, true << true), '\n');


console.info('coercion:');

console.log(Object.values('string'));


console.dir(`
--- Object.entries ---
`); // returns an array of an object's own enumerable property key-value pairs


console.info('pretty much the same, only with key-value pairs as elements:');

const string = 'abc';
for (const [key, value] of Object.entries(string)) {
  console.log(`'${string}'.indexOf('${value}') -> ${key}`);
}



/* utils */

function prettyJson(obj) {
  return JSON.stringify(obj, null, 2);
}
