console.dir();
console.info('various numerical functionality');

console.info('Math.sign(x)');
console.log(Math.sign(3));     //  1
console.log(Math.sign(-3));    // -1
console.log(Math.sign('-3'));  // -1
console.log(Math.sign(0));     //  0
console.log(Math.sign(-0));    // -0
console.log(Math.sign(NaN));   // NaN
console.log(Math.sign('foo')); // NaN
console.log(Math.sign());      // NaN

console.info('Math.trunc(x)');
console.log(Math.trunc(13.37));    // 13
console.log(Math.trunc(42.84));    // 42
console.log(Math.trunc(0.123));    //  0
console.log(Math.trunc(-0.123));   // -0
console.log(Math.trunc('-1.123')); // -1
console.log(Math.trunc(NaN));      // NaN
console.log(Math.trunc('foo'));    // NaN
console.log(Math.trunc());         // NaN

console.info('Math.cbrt(x)');
console.log(Math.cbrt(NaN));         // NaN
console.log(Math.cbrt(-1));          // -1
console.log(Math.cbrt(-0));          // -0
console.log(Math.cbrt(-Infinity));   // -Infinity
console.log(Math.cbrt(0));           // 0
console.log(Math.cbrt(1));           // 1
console.log(Math.cbrt(Infinity));    // Infinity
console.log(Math.cbrt(null));        // 0
console.log(Math.cbrt(2));           // 1.2599210498948734


console.dir();
console.info('using 0 instead of 1 with exponentiation and logarithm');

console.info('Math.expm1(x)');
console.log(Math.expm1(-1)); // -0.6321205588285577
console.log(Math.expm1(0));  // 0
console.log(Math.expm1(1));  // 1.718281828459045

console.info('Math.log1p(x)');
console.log(Math.log1p(1));  // 0.6931471805599453
console.log(Math.log1p(0));  // 0
console.log(Math.log1p(-1)); // -Infinity
console.log(Math.log1p(-2)); // NaN


console.dir();
console.info('logarithms to base 2 and 10');

console.info('Math.log2(x)');
console.log(Math.log2(3));    // 1.584962500721156
console.log(Math.log2(2));    // 1
console.log(Math.log2(1));    // 0
console.log(Math.log2(0));    // -Infinity
console.log(Math.log2(-2));   // NaN
console.log(Math.log2(1024)); // 10

console.info('Math.log10(x)');
console.log(Math.log10(2));      // 0.3010299956639812
console.log(Math.log10(1));      // 0
console.log(Math.log10(0));      // -Infinity
console.log(Math.log10(-2));     // NaN
console.log(Math.log10(100000)); // 5


console.dir();
console.info('support for compiling to JavaScript');

console.info('Math.fround(x)');
console.log(Math.fround(0));     // 0
console.log(Math.fround(1));     // 1
console.log(Math.fround(1.337)); // 1.3370000123977661
console.log(Math.fround(1.5));   // 1.5
console.log(Math.fround(NaN));   // NaN

console.info('Math.imul(a, b)');
console.log(Math.imul(2, 4));          // 8
console.log(Math.imul(-1, 8));         // -8
console.log(Math.imul(-2, -2));        // 4
console.log(Math.imul(0xffffffff, 5)); // -5
console.log(Math.imul(0xfffffffe, 5)); // -10


console.dir();
console.info('bitwise operations');

console.info('Math.clz32(x)');
console.log(Math.clz32(1));     // 31
console.log(Math.clz32(1000));  // 22
console.log(Math.clz32());      // 32
console.log(
  [NaN, Infinity, -Infinity, 0, -0, null, undefined, 'foo', {}, []].filter(n => Math.clz32(n) !== 32)
);                              // []
console.log(Math.clz32(true));  // 31
console.log(Math.clz32(3.5));   // 30


console.dir();
console.info('trigonometric methods');

console.info('Math.sinh(x)');
console.log(Math.sinh(0)); // 0
console.log(Math.sinh(1)); // 1.1752011936438014

console.info('Math.cosh(x)');
console.log(Math.cosh(0));  // 1
console.log(Math.cosh(1));  // 1.5430806348152437
console.log(Math.cosh(-1)); // 1.5430806348152437

console.info('Math.tanh(x)');
console.log(Math.tanh(0));        // 0
console.log(Math.tanh(Infinity)); // 1
console.log(Math.tanh(1));        // 0.7615941559557649

console.info('Math.asinh(x)');
console.log(Math.asinh(1));  // 0.881373587019543
console.log(Math.asinh(0));  // 0

console.info('Math.acosh(x)');
console.log(Math.acosh(-1));  // NaN
console.log(Math.acosh(0));   // NaN
console.log(Math.acosh(0.5)); // NaN
console.log(Math.acosh(1));   // 0
console.log(Math.acosh(2));   // 1.3169578969248166

console.info('Math.atanh(x)');
console.log(Math.atanh(-2));  // NaN
console.log(Math.atanh(-1));  // -Infinity
console.log(Math.atanh(0));   // 0
console.log(Math.atanh(0.5)); // 0.5493061443340548
console.log(Math.atanh(1));   // Infinity
console.log(Math.atanh(2));   // NaN

console.info('Math.hypot([value1[, value2[, ...]]])');
console.log(Math.hypot(3, 4));        // 5
console.log(Math.hypot(3, 4, 5));     // 7.0710678118654755
console.log(Math.hypot());            // 0
console.log(Math.hypot(NaN));         // NaN
console.log(Math.hypot(3, 4, 'foo')); // NaN, +'foo' => NaN
console.log(Math.hypot(3, 4, '5'));   // 7.0710678118654755, +'5' => 5
console.log(Math.hypot(-3));          // 3, the same as Math.abs(-3)
