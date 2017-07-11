// isFinite() and isNaN() were global, and are now also found on the Number constructor. their implementation was altered to not coerce their parameters to numbers.
// for completeness sake, parseInt(string, radix) and parseFloat(string) were also added to the Number constructor, with no changes.

console.info('these are not finite');
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(-Infinity));

console.info('these are finite');
console.log(Number.isFinite(0));
console.log(Number.isFinite(2e64));

console.info('would\'ve been true with global isFinite(\'0\'):');
console.log(Number.isFinite('0'));
console.info('would\'ve been true with global isFinite(null):');
console.log(Number.isFinite(null));
console.dir();

console.info('these are NaN:');
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(Number.NaN));
console.log(Number.isNaN(0 / 0));

console.info('these would have been true with global isNaN():');
console.log(Number.isNaN('NaN'));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN({}));
console.log(Number.isNaN('blabla'));

console.info('these all return false');
console.log(Number.isNaN(true));
console.log(Number.isNaN(null));
console.log(Number.isNaN(37));
console.log(Number.isNaN('37'));
console.log(Number.isNaN('37.37'));
console.log(Number.isNaN(''));
console.log(Number.isNaN(' '));
console.dir();


// Number.isInteger(number) is a whole new addition in ES6.

console.info('these are integers:');
console.log(Number.isInteger(0));
console.log(Number.isInteger(1));
console.log(Number.isInteger(-100000));

console.info('these are not integers:');
console.log(Number.isInteger(0.1));
console.log(Number.isInteger(Math.PI));
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(-Infinity));
console.log(Number.isInteger('10'));
console.log(Number.isInteger(true));
console.log(Number.isInteger(false));
console.log(Number.isInteger([1]));
