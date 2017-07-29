// '\n' will not become a newline character, but two separate characters, '\' and 'n':
console.log(String.raw`hey,\n been trying to meet you`);
console.dir();

// similarly, '\u000A' is not an escape sequence anymore, check the string length for proof:
console.log(String.raw`\u000A`.length);
console.dir();

// normally you would not call String.raw() as a function, but to simulate `6${'*'}7${'='}42` you can do:
console.log(String.raw({
  raw: '6742'
}, '*', '='));
console.dir();

// the above works as a string is an array-like object. we could pass in an actual array instead:
console.log(String.raw({
  raw: ['must be a ', ' between us']
}, 'devil'));
console.dir();

// interpolation still takes place, so ${substitutions} are processed:
const action = 'go';
const consequence = 'die';
const reason = 'chained';
console.log(String.raw`if you ${action}, i will surely ${consequence}, we're ${reason}`);
console.dir();
