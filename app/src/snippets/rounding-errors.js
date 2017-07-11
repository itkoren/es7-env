// rounding errors can become a problem in JavaScript, especially with decimal fractions. for example, 0.1 and 0.2 can’t be represented precisely, which you notice if you add them and compare them to 0.3 (which can’t be represented precisely, either).
console.log(0.1 + 0.2 === 0.3); // wat?!

// Number.EPSILON specifies a reasonable margin of error when comparing floating point numbers.
console.log('Number.EPSILON:', Number.EPSILON); // 0.0000000000000002220446049250313 in decimal

// it provides a better way to compare floating point values, as demonstrated by the following function:
function epsEqu(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}

console.log(epsEqu(0.1 + 0.2, 0.3)); // boom.
