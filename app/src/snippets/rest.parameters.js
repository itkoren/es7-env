'use strict';

console.log('');
console.log('Processing Rest Parameters:');
console.log('');

((...args) => console.log(args.length))('Keep', 'Calm', '&', 'ES2015');

const multiply = (multiplier, ...args) => args.map(element => multiplier * element);
console.log(multiply(2, 1, 2, 3));

const argsAssign = function(first, ...args) {
  first = 'qux';

  console.log('first: ' + first);
  console.log('args: ' + args);

  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 3
    && arguments[0] === 'foo'
    && arguments[1] === 'bar'
    && arguments[2] === 'baz';
};

console.log(argsAssign('foo', 'bar', 'baz'));
