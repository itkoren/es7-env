'use strict';

console.log('');
console.log('Processing Destructuring Assignment:');
console.log('');

const names = ['Anna', 'Maria', 'Natan', 'Yakov', 'Ezra'];
const anna = names[0];
const maria = names[1];
const natan = names[2];
console.log(`${anna}, ${maria} and ${natan} are friends`);

const [first, second, third] = names;
console.log(`${first}, ${second} and ${third} are friends`);

const [uno,, tres] = names;
console.log(`${uno} and ${tres} are friends`);

const [one, two, ...rest] = names;
console.log(`${one} and ${two} are friends with ${rest}`);

const [a, b, c] = 'ab';
console.log(`a: ${a}, b: ${b}, c: ${c}`);

((options) => {
  let id = 'default';

  if (options.id) {
    id = options.id;
  }

  let name = options.name;
  let type = options.type;

  console.log(`id: ${id}, name: ${name}, type: ${type}`);
})({
  id: '123',
  name: 'First Name',
  type: 'The Best'
});

((options) => {
  let { id, name, type } = options;
  console.log(`id: ${id}, name: ${name}, type: ${type}`);
})({
  id: '123',
  name: 'First Name',
  type: 'The Best'
});

((options) => {
  let id = 'default';
  let name = 'default';
  let type = 'default';

  ({ id, name, type } = options);
  console.log(`id: ${id}, name: ${name}, type: ${type}`);
})({
  id: '123',
  name: 'First Name',
  type: 'The Best'
});

const { toFixed } = 2;
console.log(toFixed.call(2, 2));

const { join } = [];
console.log(join.call(['Hello', 'World'], ' '));

const person = {
  name: 'Itai Koren',
  age: 42,
  salary: NaN,
  address: {
    city: 'Kfar Saba',
    country: 'Israel'
  }
};
const { name, salary, address: { city: cityValue, country: countryValue } } = person;
console.log(`${name} lives in ${cityValue}, ${countryValue} and earns ${salary}`);

const drink = 'whiskey';
const { [drink]: wish } = { whiskey: 'glen' };
console.log(`I wish I had a shot of ${wish}`);

const { aa = 1, bb = 0, z:cc = 3 } = { bb: 2, z: void 0 };
console.log(`aa: ${aa}, bb: ${bb}, cc: ${cc}`);

(({ c, x:d, e }) => {
  console.log(`c: ${c}, d: ${d}, e: ${e}`);
})({
  c: 7,
  x: 8
});
