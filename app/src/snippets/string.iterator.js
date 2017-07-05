let str = 'A\uD835\uDC68';

const strIter = str[Symbol.iterator](); // eslint-disable-line no-undef

console.info('iterator direct invocation:');
console.log(strIter.next().value);
console.log(strIter.next());
console.log(strIter.next());

str += 'B\uD835\uDC69C\uD835\uDC6A';

console.dir();
console.info('for..of:');
for (let v of str) {
  console.log(v);
}
