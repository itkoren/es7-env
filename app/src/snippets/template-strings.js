// '\n' is not a newline character, '\' and 'n' are two characters
console.log(String.raw`Hi\n${2 + 3}!`);
console.dir();

// similarly, '\u000A' is not an escape sequence: check the string length for proof
console.log(String.raw`Hi\u000A!`);
console.log(String.raw`Hi\u000A!`.length);
console.dir();

// interpolation takes place, so ${substitutions} are processed
const name = 'Bob';
console.log(String.raw`Hi\n${name}!`);
console.dir();

// normally you would not call String.raw() as a function, but to simulate `t${0}e${1}s${2}t` you can do:
console.log(String.raw({raw: 'test'}, 0, 1, 2));
console.dir();

// note that a string is an array-like object, so we could pass in an actual array.
// the following is equivalent to:
// `foo${2 + 3}bar${'Java' + 'Script'}baz`
console.log(String.raw({
  raw: ['foo', 'bar', 'baz']
}, 2 + 3, 'Java' + 'Script'));
console.dir();
