// - the new data property flags gives you access to the flags of a regular expression, just like source already gives you access to the pattern in ES5.

// - you can use the constructor RegExp() to make a copy of a regular expression.


const REGEX = /abc/ig;

console.dir(`
flags property:
`);

console.log(REGEX.source); // ES5
console.log(REGEX.flags); // ES6


console.dir(`
clone via RegExp() constructor:
`);

console.log(new RegExp(REGEX).source);
console.log(new RegExp(REGEX).flags);
console.log(new RegExp(REGEX, 'i').flags); // change flags
