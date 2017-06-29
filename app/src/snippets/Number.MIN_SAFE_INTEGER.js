console.info('MIN_SAFE_INTEGER value:');
console.log(Number.MIN_SAFE_INTEGER);
console.log();

console.info('MIN_SAFE_INTEGER is the lowest integer value that can be represented by floating point numbers, which is -(2⁵³ - 1):');
console.log(Number.MIN_SAFE_INTEGER === -(Math.pow(2, 53) - 1));
console.log();

console.info('let\'s check its safety via isSafeInteger:');
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER));
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1));
