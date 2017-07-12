/*global Symbol*/

console.dir();
console.info('anonymous functions names are inferred:');

const foo = function() {};
console.log(foo.name);

const obj = {
  bar: () => {}
};
console.log(obj.bar.name);


console.dir();
console.info('name is configurable by default:');

const wat = () => {};
console.log(wat.name);
Object.defineProperty(wat, 'name', {
  value: 'wow'
});
console.log(wat.name);


console.dir();
console.info('symbols as function names:');

const sym1 = Symbol('foo');
const sym2 = Symbol();
const o = {
  [sym1]: () => {},
  [sym2]: () => {},
  [Symbol.asyncIterator]: () => {},
};
console.log(o[sym1].name);
console.log(o[sym2].name);
console.log(o[Symbol.asyncIterator].name);
