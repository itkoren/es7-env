console.dir();
console.info('--- unicode code point escapes ---');
console.dir();

// unicode "characters" (code points) are 21 bit long. JavaScript strings are (roughly) sequences of 16 bit characters, encoded as UTF-16.
// therefore, code points beyond the first 16 bits of the code point range are represented by two JavaScript characters.

// until now, if you wanted to specify such code points via numbers, you needed two so-called unicode escapes:
console.log('\uD83D\uDE80');
// the new kind of unicode escape lets you specify any code point:
console.log('\u{1F680}');
console.log('\uD83D\uDE80' === '\u{1F680}');
console.dir();

// the string iterator splits strings along code point boundaries, which means that the strings it returns comprise one or two characters:
console.info('iterator split:');
for (let ch of 'a\uD83D\uDE80b') {
  console.log(ch.length);
}
console.dir();

// that gives you a quick way to count the unicode code points in a string:
console.info('count chars, including code points:');
console.log([...'a\uD83D\uDE80b'].length);
console.dir();

// ... and may help with reversing such strings:
console.info('ES5 reverse with unicode:');
console.log('\uD83D\uDE80'.split('').reverse().join(''));
console.info('ES6 reverse with unicode:');
console.log([...'\uD83D\uDE80'].reverse().join(''));
console.dir();


console.dir();
console.info('--- numeric values of code points ---');
console.dir();

console.info('codePointAt returns the numeric (decimal) value of a code point:');
console.log('ABC'.codePointAt(1));
console.log('ABC'.codePointAt(1).toString(16));
console.log('ABC'.codePointAt(42));
console.dir();

// bonus: what will be the output of this:
// console.log('\u{1F680}'.codePointAt(0).toString(16));

console.info('the opposite of codePointAt is String.fromCodePoint:');
console.log(String.fromCodePoint(42));
console.dir();

[
  0x1f312,
  0x1f680,
  0x1f30e,
  '_',
  Infinity,
  -1,
  3.14,
  3e-2,
  NaN,
  0x10ffff, // highest code point available
  0x11ffff,
].map(cp => {
  try {
    console.success(String.fromCodePoint(cp));
  } catch (e) {
    console.error(e);
  }
});
console.dir();


// bonus - what will be the output here?
// let lol = 123;
// console.log(l\u{6F}l);



console.dir();
console.info('--- addendum: string normalization ---');
console.dir();

const str = '\u1E9B\u0323';

// canonically-composed form (NFC) - the default
console.log('NFC:', str.normalize('NFC')); // '\u1E9B\u0323'

// canonically-decomposed form (NFD)
console.log('NFD:', str.normalize('NFD')); // '\u017F\u0323\u0307'

// compatibly-composed (NFKC)
console.log('NFKC:', str.normalize('NFKC')); // '\u1E69'

// compatibly-decomposed (NFKD)
console.log('NFKD:', str.normalize('NFKD')); // '\u0073\u0323\u0307'
