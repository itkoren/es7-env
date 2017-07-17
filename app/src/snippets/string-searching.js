const str = 'Despacito, Quiero respirar tu cuello despacito'; // "slowly, i want to breathe your neck slowly"

console.dir();
console.info('String.prototype.startsWith()');
console.dir();

console.log(str.startsWith('Despacito'));
console.log(str.startsWith('Quiero'));
// 11 is the start position
console.log(str.startsWith('Quiero', 11));


console.dir();
console.info('String.prototype.endsWith()');
console.dir();

console.log(str.endsWith('despacito'));
console.log(str.endsWith('Quiero'));
// 17 is the string length
console.log(str.endsWith('Quiero', 17));


console.dir();
console.info('String.prototype.includes()');
console.dir();

console.log(str.includes('Quiero'));
console.log(str.includes('quiero'));
// 60 is where the search should begin
console.log(str.includes('despacito', 60), `(string length is ${str.length})`);
