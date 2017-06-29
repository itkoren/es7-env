console.info('these are not finite');
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(-Infinity));
console.log();

console.info('these are finite');
console.log(Number.isFinite(0));
console.log(Number.isFinite(2e64));
console.log();

console.info('would\'ve been true with global isFinite(\'0\'):');
console.log(Number.isFinite('0'));
console.info('would\'ve been true with global isFinite(null):');
console.log(Number.isFinite(null));
