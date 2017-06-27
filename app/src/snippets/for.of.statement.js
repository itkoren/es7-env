'use strict';

console.log('');
console.log('Processing for...of Statement:');
console.log('');

const iterableNumber = [10, 20, 30];
for (const value of iterableNumber) {
  console.log(value);
}

const iterableString = 'Pom-Pom-Pom';
for (const value of iterableString) {
  console.log(value);
}
