// todo - extracted from string.codePointAt

// the code-point of 'B' is 66
console.log('ABC'.codePointAt(1));

// unicode escape sequences work, too
console.log('\uD800\uDC00'.codePointAt(0));

// an index overflow will result in undefined
console.log('XYZ'.codePointAt(42));


// todo - extracted from String.fromCodePoint

console.info('code point can be represented by decimals:');
console.log(String.fromCodePoint(42));
console.log(String.fromCodePoint(65, 90));

console.info('...or by hexadecimals:');
console.log(String.fromCodePoint(0x404));
console.log(String.fromCodePoint(0x1D306, 0x61, 0x1D307));
console.log(String.fromCodePoint(0x10FFFF)); // highest code-point available

console.info('these will throw a RangeError:');
['_', Infinity, -1, 3.14, 3e-2, NaN]
  .map(cp => {
    console.log(cp);
    try {
      console.success(String.fromCodePoint(cp));
    } catch (e) {
      console.error(e);
    }
  });

// String.fromCharCode() cannot get a character at such a high code point, but String.fromCodePoint() can return a 4-byte character as well as the usual 2-byte ones (i.e., it can return a single character which actually has a string length of 2 instead of 1!)
console.log(String.fromCodePoint(0x2F804)); // or 194564 in decimal


// todo - extracted from string.normalize

const str = '\u1E9B\u0323';

// Canonically-composed form (NFC) - the default
console.log('NFC:', str.normalize('NFC')); // '\u1E9B\u0323'

// Canonically-decomposed form (NFD)
console.log('NFD:', str.normalize('NFD')); // '\u017F\u0323\u0307'

// Compatibly-composed (NFKC)
console.log('NFKC:', str.normalize('NFKC')); // '\u1E69'

// Compatibly-decomposed (NFKD)
console.log('NFKD:', str.normalize('NFKD')); // '\u0073\u0323\u0307'


// todo - added after reading at 2ality

const rocket = '\uD83D\uDE80';
console.log(rocket.length);
console.log([...rocket].length);
for (let ch of rocket) {
  console.log(ch.length);
}

console.log('\uD83D\uDE80'.codePointAt(0));
console.log('\uD83D\uDE80'.codePointAt(1));

console.log([...rocket]);
console.log([...rocket].map((v, k) => String.prototype.codePointAt.call(rocket, k)));


// todo - added from console

// how surrogate pair is decoded to code-point in utf-16:
console.log((0x10000 + ((0xD83D & 0x03FF) << 10) + (0xDE80 & 0x03FF)).toString(16));
