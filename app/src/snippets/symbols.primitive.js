/*global Symbol*/
'use strict';

console.log('');
console.log('Processing Symbols Primitive:');
console.log('');

// Symbols can be used as Object keys
const fooSym = Symbol('foo');
const obj = {};
obj.foo = 'bar';
obj[fooSym] = 'baz';
console.log(Object.keys(obj)); // -> [ 'foo' ]
console.log(Object.getOwnPropertyNames(obj)); // -> [ 'foo' ]
console.log(`Equals to Symbol(foo): ${Object.getOwnPropertySymbols(obj)[0] === fooSym}`); // -> [ Symbol(foo) ]
console.log(JSON.stringify(obj)); // -> { foo: 'bar' }

// Symbols are completely unique
const foo1 = Symbol('foo');
const foo2 = Symbol('foo');
const object = {
    [foo1]: 1,
    [foo2]: 2,
};
console.log(`foo1: ${object[foo1]}`);
console.log(`foo2: ${object[foo2]}`);

// …except when they’re not
const bar1 = Symbol('bar');
const bar2 = Symbol('bar');
const bar3 = Symbol.for('bar');
const bar4 = Symbol.for('bar');
console.log(`bar1 === bar2 -> ${bar1 === bar2}`);
console.log(`bar2 === bar3 -> ${bar2 === bar3}`);
console.log(`bar3 === bar4 -> ${bar3 === bar4}`);
console.log(`bar1 === bar3 -> ${bar1 === bar3}`);
console.log(`bar1 === bar4 -> ${bar1 === bar4}`);
console.log(`bar2 === bar4 -> ${bar2 === bar4}`);

// As Enums
const levels = {
    DEBUG: Symbol('debug'),
    INFO: Symbol('info'),
    WARN: Symbol('warn'),
};
const log = (lvl, msg) => {
  switch(lvl) {
    case levels.DEBUG:
      console.debug(msg);
      break;
    case levels.INFO:
      console.info(msg);
      break;
    case levels.WARN:
      console.warn(msg);
      break;
  }
};
log(levels.DEBUG, 'debug message');
log(levels.INFO, 'info message');

// Well known Symbol for example
const MyObject = {
    [Symbol.hasInstance](instance) {
        return Array.isArray(instance);
    }
}
console.log(`[] is instanceof MyObject: ${[] instanceof MyObject}`);
