let string = 'A\uD835\uDC68';

const strIter = string[Symbol.iterator](); // eslint-disable-line no-undef

console.log(strIter.next().value);
console.log(strIter.next());
console.log(strIter.next());

string += 'B\uD835\uDC69C\uD835\uDC6A';

for (let v of string) {
  console.log(v);
}
