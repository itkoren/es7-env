// the notion of safe integers centers on how mathematical integers are represented in JavaScript. JavaScript numbers have only enough storage space to represent 53 bit signed integers (IEEE-754 double precision numbers).
// in the range (−2⁵³, 2⁵³) (excluding the lower and upper bounds), JavaScript integers are safe: there is a one-to-one mapping between them and the mathematical integers they represent.
// beyond this range, JavaScript integers are unsafe: two or more mathematical integers are represented as the same JavaScript integer. for example, starting at 2⁵³, JavaScript can represent only every second mathematical integer.

console.info('unsafe integers are misrepresented:');
const upperBound = Math.pow(2, 53);
console.log('upper bound:', upperBound);
[...Array(10)].map((_, n) => console.log(`upper bound + ${n}:`, upperBound + n));
console.dir();

console.info('MAX_SAFE_INTEGER is the highest integer value that can be represented by floating point numbers, which is 2⁵³ - 1:');
console.log(Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1);
console.info('MIN_SAFE_INTEGER is the lowest integer value that can be represented by floating point numbers, which is -(2⁵³ - 1):');
console.log(Number.MIN_SAFE_INTEGER === -(Math.pow(2, 53) - 1));
console.dir();


console.info('isSafeInteger() can be used to check if an integer is in the safe zone.');

console.info('these are safe:');
console.log(Number.isSafeInteger(3));
console.log(Number.isSafeInteger(3.0));
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1));
console.log(Number.isSafeInteger(Math.pow(2, 53) - 1));

console.info('all of these are not safe:');
console.log(Number.isSafeInteger(NaN));
console.log(Number.isSafeInteger(Infinity));
console.log(Number.isSafeInteger('3'));
console.log(Number.isSafeInteger(3.1));
console.log(Number.isSafeInteger(Math.pow(2, 53)));
