console.info('state the target length as 10:');
console.log('abc'.padEnd(10));
console.log('abc'.padEnd(10, 'WAT'));
console.log();

console.info('state the target length as shorter than the resulted string, so the pad string is trimmed:');
console.log('abc'.padEnd(6, '123456'));
console.log();

console.info('when the target length is shorter than the initial string, the string is returned as-is:');
console.log('abc'.padEnd(1));
