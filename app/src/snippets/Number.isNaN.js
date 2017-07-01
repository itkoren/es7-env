// previously global

console.info('these are NaN:');
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(Number.NaN));
console.log(Number.isNaN(0 / 0));
console.log();

console.info('these would have been true with global isNaN():');
console.log(Number.isNaN('NaN'));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN({}));
console.log(Number.isNaN('blabla'));
console.log();

console.info('these all return false');
console.log(Number.isNaN(true));
console.log(Number.isNaN(null));
console.log(Number.isNaN(37));
console.log(Number.isNaN('37'));
console.log(Number.isNaN('37.37'));
console.log(Number.isNaN(''));
console.log(Number.isNaN(' '));
