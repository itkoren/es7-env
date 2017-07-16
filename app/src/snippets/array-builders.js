/*global Symbol*/

let arr;

console.dir();
console.info('--- Array.from() ---');
console.dir('turns array-like objects or iterables into real arrays');
console.dir();

// array-like objects (anything that has a length property and can be accessed by index)

console.info('arguments list:');

function arrayFromArgs() {
  return Array.from(arguments);
}
arr = arrayFromArgs(
  +[]+[], !!+!+[], +!+[]+ +!+[], []+[]/[], []+[][+!+[]]
);

console.log(arr);
console.log('map is a', typeof arr.map);
console.dir();

console.info('node list:');

const nodeList = document.querySelectorAll('div');
arr = Array.from(nodeList);

console.log(arr[10]);
console.log('forEach is a', typeof arr.forEach);
console.dir();

// iterables (constructs that expose their elements via methods)

console.info('string:');

arr = Array.from('abc');

console.log(arr);
console.log('instance of array?', arr instanceof Array);
console.dir();

console.info('custom iterable:');

class Clazz {
  constructor() { this.index = 3; }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index--) {
          return {value: this.index, done: false};
        }
        return {done: true};
      }
    }
  }
}
arr = Array.from(new Clazz());

console.log(arr);
console.log('is array?', Array.isArray(arr));
console.dir();

console.info('mapping:');

const buttons = document.querySelectorAll('button');
arr = Array.from(buttons, b => b.textContent);

console.log(arr);
// use the logger as the mapper, to print each item's value/index
Array.from(arr, console.log);
console.dir();



console.dir();
console.info('--- Array.of() ---');
console.dir('creates an array from all of its arguments');
console.dir();

console.info('we can mix types:')
console.log(Array.of('', +'', !''));
console.dir();

console.info('it behaves a little differet from the array constructor:')

arr = Array.of(3);
console.log(arr);
console.log(0 in arr);
console.log(arr[0]);
console.dir();

arr = Array(3);
console.log(arr);
console.log(0 in arr);
console.log(arr[0]);
console.dir();
