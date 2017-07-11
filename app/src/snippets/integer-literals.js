console.info('ES5 already has hexadecimal integers:');
console.log(0xA);

console.info('ES6 introduces binary and octal notation:');
console.log(0b1010);
console.log(0o12);

console.dir();
console.info('Number.prototype.toString(radix) can still be used to convert numbers back:');
console.log((0xA).toString(16));
console.log((0b1010).toString(2));
console.log((0o12).toString(8));

console.dir();
console.info('parseInt(string, radix) provides special support for the hexadecimal literal notation:');
console.log(
  parseInt('0xFF'),
  parseInt('0xFF', 0),
  parseInt('0xFF', 16)
);

console.info('... but does not have special support for binary or octal literals!');
console.log(
  parseInt('0b111'),
  parseInt('0b111', 2),
  parseInt('0o10'),
  parseInt('0o10', 8)
);

console.dir();
console.info('if you want to parse these kinds of literals, you need to use Number():');
console.log(Number('0b111'));
console.log(Number('0o10'));
// bonus: how can we still parse these with parseInt()?
