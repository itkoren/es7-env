console.info('these are integers:');
console.log(Number.isInteger(0));
console.log(Number.isInteger(1));
console.log(Number.isInteger(-100000));
console.log();

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
