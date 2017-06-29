console.info('state the target length as 10:');
console.log('abc'.padStart(10));
console.log('abc'.padStart(10, 'WAT'));
console.log();

console.info('state the target length as shorter than the resulted string, so the pad string is trimmed:');
console.log('abc'.padStart(6, '123465'));
console.log();

console.info('when the target length is shorter than the initial string, the string is returned as-is:');
console.log('abc'.padStart(1));
