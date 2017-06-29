const str = 'abc';

console.log(str.repeat(0));
console.log(str.repeat(2));
console.log(str.repeat(3.5));

try {
  str.repeat(-1);
} catch (e) {
  console.error(e);
}

const obj = {
  toString: () => 'abc',
  repeat: String.prototype.repeat // repeat() is a generic method
};
console.log(obj.repeat(2));
