'use strict';

console.log('');
console.log('Processing Iterators:');
console.log('');

const numbersIterator = makeIterator([10, 20, 30]);

console.log(numbersIterator.next());
// { value: 1, done: false }

console.log(numbersIterator.next());

console.log(numbersIterator.next());

console.log(numbersIterator.next());



console.log('');
console.log('##########################');
console.log('##########################');
console.log('##########################');
console.log('');



const iterableNumber = [10, 20, 30];
for (const value of iterableNumber) {
  console.log(value);
}







function makeIterator(array) {
    let nextIndex = 0;

    return {
       next: () => {
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {value: void 0, done: true};
       }
    };
}
