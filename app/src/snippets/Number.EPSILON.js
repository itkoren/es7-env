const x = 0.2;
const y = 0.3;
const z = 0.1;
const floatRounded = Math.abs(x - y + z);

console.log('Number.EPSILON:', Number.EPSILON);
console.log('floatRounded:', floatRounded);
console.log('less than epsilon:', floatRounded < Number.EPSILON);
