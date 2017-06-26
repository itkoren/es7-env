'use strict';

console.log('');
console.log('Processing Variables const:');
console.log('');

{
  let firstName = 'Itai';

  console.log('Inside Block:', firstName);

  firstName = {};

  console.log('Inside Block:', firstName);

  firstName = 5;

  console.log('Inside Block:', firstName);
}

{
  const person = {};
  console.log('Inside Block:', person);

  const lastName = 'Koren';
  console.log('Inside Block:', lastName);

  person.lasName = 'Koren';
  console.log('Inside Block:', person);

  //lastName = {}; // eslint-disable-line no-const-assign
  console.log('Inside Block:', lastName);

  //lastName = 5; // eslint-disable-line no-const-assign
  console.log('Inside Block:', lastName);
}

console.log('Outside Block:', person); // eslint-disable-line no-undef
