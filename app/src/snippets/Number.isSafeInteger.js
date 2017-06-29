console.info('these are safe:');
console.log(Number.isSafeInteger(3));
console.log(Number.isSafeInteger(3.0));
console.log();

console.info('2⁵³ - 1 is right on the boundary of IEEE-754 double precision numbers, so it\'s safe:');
console.log(Number.isSafeInteger(Math.pow(2, 53) - 1));
console.info('2⁵³ is not safe, it\'s outside the boundaries of IEEE-754 double precision numbers:');
console.log(Number.isSafeInteger(Math.pow(2, 53)));
console.log();

console.info('all of these are not safe:');
console.log(Number.isSafeInteger(NaN));
console.log(Number.isSafeInteger(Infinity));
console.log(Number.isSafeInteger('3'));
console.log(Number.isSafeInteger(3.1));
