const str = 'abc';

console.dir();
console.info('String.prototype.repeat()');
console.dir();

console.log(str.repeat(0));
console.log(str.repeat(2));
console.log(str.repeat(3.5)); // what will happen with 3.6?

try {
  str.repeat(-1);
} catch (e) {
  console.error(e);
}

const obj = {
  toString: () => str,
  repeat: String.prototype.repeat // repeat() is a generic method
};
console.log(obj.repeat(2));


console.dir();
console.info('String.prototype.padStart()');
console.dir();

console.info('state the target length as 10:');
console.log(str.padStart(10));
console.log(str.padStart(10, 'WAT'));
console.dir();

console.info('state the target length as shorter than the resulted string, so the pad string is trimmed:');
console.log(str.padStart(6, '123465'));
console.dir();

console.info('when the target length is shorter than the initial string, the string is returned as-is:');
console.log(str.padStart(1));


console.dir();
console.info('String.prototype.padEnd()');
console.dir();

console.info('state the target length as 10:');
console.log(str.padEnd(10));
console.log(str.padEnd(10, 'WAT'));
console.dir();

console.info('state the target length as shorter than the resulted string, so the pad string is trimmed:');
console.log(str.padEnd(6, '123456'));
console.dir();

console.info('when the target length is shorter than the initial string, the string is returned as-is:');
console.log(str.padEnd(1));
