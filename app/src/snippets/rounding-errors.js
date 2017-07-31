
// rounding errors can become a problem in javascript, especially with decimal fractions - due the limitation of available bits to represent a number.
// for example, 0.1 and 0.2 can’t be represented precisely, which you notice if you add them and compare them to 0.3 (which can’t be represented precisely, either).
console.log(0.1 + 0.2 === 0.3); // wat?!

// Number.EPSILON specifies a reasonable margin of error when comparing floating point numbers.
// basically, epsilon is the result of repeat divisions, until an identical result is observed - due the same limitation of available bits.
// this limitation is met at around 0.0000000000000002220446049250313 (in decimal notation).
console.log('Number.EPSILON:', Number.EPSILON);

// it provides a better way to compare floating point values:
function epsEqu(x, y) {
  // check if the delta is smaller than the allowed margin of error
  // (abs() allows us to accept the arguments in any order)
  return Math.abs(x - y) < Number.EPSILON;
}

console.log(epsEqu(0.1 + 0.2, 0.3)); // boom.
