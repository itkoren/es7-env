
// - you can use the constructor RegExp() to make a copy of a regular expression.

// - the new data property flags gives you access to the flags of a regular expression, just like source already gives you access to the pattern in ES5.

// - the new flag /y (sticky) anchors each match of a regular expression to the end of the previous match. it adds two behaviors:
//   - anchored to re.lastIndex: The match must start at re.lastIndex (the index after the previous match). This behavior is similar to the ^ anchor, but with that anchor, matches must always start at index 0.
//   - match repeatedly: If a match was found, re.lastIndex is set to the index after the match. This behavior is similar to the /g flag. like /g, /y is normally used to match multiple times.
//   the main use case for this matching behavior is tokenizing.

// - the new flag /u (unicode) handles surrogate pairs (such as \uD83D\uDE80) as code points and lets you use Unicode code point escapes (such as \u{1F680}) in regular expressions.


console.info('clone with RegExp() constructor:');
console.log(new RegExp(/abc/ig).source);
console.log(new RegExp(/abc/ig).flags);
console.log(new RegExp(/abc/ig, 'i').flags); // change flags
console.dir();

console.info('flags property:');
console.log(/abc/ig.source); // ES5
console.log(/abc/ig.flags); // ES6
console.dir();

console.info('sticky flag:');
console.log(/abc/y.flags);
console.dir();

console.info('using sticky matching for tokenizing:');

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

console.log('legal sequence of tokens - sticky matching and non-sticky matching produce the same output:');
console.log(tokenize(TOKEN_GY, '3 + 4'));
console.log(tokenize(TOKEN_G, '3 + 4'));

console.log('with non-token text in the string - sticky matching stops tokenizing (useful for error handling):');
console.log(tokenize(TOKEN_GY, '3x + 4'));
console.log(tokenize(TOKEN_G, '3x + 4'));
