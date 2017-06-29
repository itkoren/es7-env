'use strict';

console.log('');
console.log('Processing Template Literals:');
console.log('');

const word1 = 'Hello';
const word2 = 'World';
const twoWords = word1 + ' ' + word2;
console.log(twoWords);

const templatedWords = `${word1} ${word2}`;
console.log(templatedWords);

const a = 'ba';
const b = 'QUX';
const c = `foo bar
${a + 'z'} ${b.toLowerCase()}`;
console.log(c);

const foo = {
  toString: () => 'foo'
};
console.log(`${foo}` === 'foo');

// Tagged Template Literals
const person = 'Itai';
const age = 42;
const tag = (parts, person, age) => {
  const str0 = parts[0]; // 'that '
  const str1 = parts[1]; // ' is a '
  const str2 = parts[2]; // ''

  let ageStr;
  if (age > 99) {
    ageStr = 'old';
  } else {
    ageStr = 'youngster';
  }

  return `${str0}${person}${str1}${ageStr}${str2}`;
};
const output = tag`that ${person} is a ${age}`;
console.log(output);

const template = (parts, ...keys) => {
  return ((...values) => {
    const dict = values[values.length - 1] || {};
    const result = [parts[0]];

    keys.forEach((key, i) => {
      const value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, parts[i + 1]);
    });

    return result.join('');
  });
};
const t1Closure = template`${0}${1}${0}!`;
console.log(t1Closure('Y', 'A'));  // "YAY!"

const t2Closure = template`${0} ${'foo'}!`;
console.log(t2Closure('Hello', {foo: 'World'}));  // "Hello World!"
