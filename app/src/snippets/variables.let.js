'use strict';

console.log('');
console.log('Processing Variables let:');
console.log('');

for (var i = 0; i < 5; i++) {
  console.log('Inside Block:', i);
}

console.log('Outside Block:', i);

for (let j = 0; j < 5; j++) {
  console.log('Inside Block:', j);
}

console.log('Outside Block:', j); // eslint-disable-line no-undef
