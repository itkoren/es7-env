
console.dir(`
--- unicode flag ---
`);

// - the new flag /u (unicode) handles surrogate pairs (such as \uD83D\uDE80) as code points and lets you use Unicode code point escapes (such as \u{1F680}) in regular expressions.
//   - you can use Unicode code point escape sequences such as \u{1F42A} for specifying characters via code points. normal Unicode escapes such as \u03B1 only have a range of four hexadecimal digits (which equals the Basic Multilingual Plane).
//   - “characters” in the regular expression pattern and the string are code points (not UTF-16 code units). code units are converted into code points.

console.info('the new unicode code point escapes can be used in regex literals:');
console.log(/^\u{3}$/u.test('uuu'));
console.log(/^\u{3}$/.test('uuu')); // otherwise interpreted as 3 times the character 'u'

console.info('code point vs. surrogate pairs:');
console.log('\u{1F680}' === '\uD83D\uDE80');

console.info('detect lone surrogates inside (surrogate pairs encoding) code points:');
console.log(/\uD83D/.test('\uD83D\uDC2A'));
console.log(/\uD83D/u.test('\uD83D\uDC2A')); // in unicode mode, surrogate pairs are atomic units

console.info('code points in character classes:');
console.log(/^[\uD83D\uDC2A]$/u.test('\uD83D\uDC2A'));

console.info('the dot operator matches code points, not code units:');
console.log('\uD83D\uDE80'.match(/./gu).length);

console.info('quantifiers apply to code points, not code units:');
console.log(/\uD83D\uDE80{2}/u.test('\uD83D\uDE80\uD83D\uDE80'));


console.dir(`
--- sticky flag ---
`);

// - the new flag /y (sticky) anchors each match of a regular expression to the end of the previous match. it adds two behaviors:
//   - anchored to re.lastIndex: The match must start at re.lastIndex (the index after the previous match). This behavior is similar to the ^ anchor, but with that anchor, matches must always start at index 0.
//   - match repeatedly: If a match was found, re.lastIndex is set to the index after the match. This behavior is similar to the /g flag. like /g, /y is normally used to match multiple times.
//   the main use case for this matching behavior is tokenizing.

console.log(/abc/y.flags);

console.dir();
console.info('use case: using sticky matching for tokenizing:');

function tokenize(TOKEN_REGEX, str) {
  let result = [];
  let match;
  while (match = TOKEN_REGEX.exec(str)) {
    result.push(match[1]);
  }
  return result;
}

const TOKEN_GY = /\s*(\+|[0-9]+)\s*/gy;
const TOKEN_G  = /\s*(\+|[0-9]+)\s*/g;

console.info('legal sequence of tokens - sticky matching and non-sticky matching produce the same output:');
console.log(tokenize(TOKEN_GY, '3 + 4'));
console.log(tokenize(TOKEN_G, '3 + 4'));

console.info('with non-token text in the string - sticky matching stops tokenizing (useful for error handling):');
console.log(tokenize(TOKEN_GY, '3x + 4'));
console.log(tokenize(TOKEN_G, '3x + 4'));
console.dir();
