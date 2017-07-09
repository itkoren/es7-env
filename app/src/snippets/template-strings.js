// the character after 'Hi' is not a newline character, '\' and 'n' are two characters.
console.log(String.raw`Hi\n${2 + 3}!`);
console.dir();

// same here, this time we will get the \, u, 0, 0, 0, A; 6 characters.
// all kinds of escape characters will be ineffective and backslashes will be present in the output string.
// you can confirm this by checking the .length property of the string.
console.log(String.raw`Hi\u000A!`);
console.log(String.raw`Hi\u000A!`.length);
console.dir();

// substitutions are processed.
const name = 'Bob';
console.log(String.raw`Hi\n${name}!`);
console.dir();

// normally you would not call String.raw() as a function, but to simulate `t${0}e${1}s${2}t` you can do:
console.log(String.raw({raw: 'test'}, 0, 1, 2));
console.dir();

// note that 'test', a string, is an array-like object. The following is equivalent to:
// `foo${2 + 3}bar${'Java' + 'Script'}baz`
console.log(String.raw({
  raw: ['foo', 'bar', 'baz']
}, 2 + 3, 'Java' + 'Script'));
console.dir();
