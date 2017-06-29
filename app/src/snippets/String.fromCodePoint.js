console.info('code point can be represented by decimals:');
console.log(String.fromCodePoint(42));
console.log(String.fromCodePoint(65, 90));

console.info('...or by hexadecimals:');
console.log(String.fromCodePoint(0x404));
console.log(String.fromCodePoint(0x1D306, 0x61, 0x1D307));
console.log(String.fromCodePoint(0x10FFFF)); // highest code-point available

console.info('these will throw a RangeError:');
try {
  String.fromCodePoint('_');
} catch (e) {
  console.error(e);
}
try {
  String.fromCodePoint(Infinity);
} catch (e) {
  console.error(e);
}
try {
  String.fromCodePoint(-1);
} catch (e) {
  console.error(e);
}
try {
  String.fromCodePoint(3.14);
} catch (e) {
  console.error(e);
}
try {
  String.fromCodePoint(3e-2);
} catch (e) {
  console.error(e);
}
try {
  String.fromCodePoint(NaN);
} catch (e) {
  console.error(e);
}

// String.fromCharCode() cannot get a character at such a high code point, but String.fromCodePoint() can return a 4-byte character as well as the usual 2-byte ones (i.e., it can return a single character which actually has a string length of 2 instead of 1!)
console.log(String.fromCodePoint(0x2F804)); // or 194564 in decimal
