/* 
The point of Symbol.species is to let built-in methods determine the proper type for derived objects.
Whenever a function is supposed to return a new instance of the same kind,
it usually instantiates a new this.constructor, which might be a subclass of the class that defined the method.
But you might not always want this when subclassing, and that's where Symbol.species comes in.
*/

/* Example not working in here... */
class MyArray extends Array {
  // Overwrite species to the parent Array constructor
  // eslint-disable-next-line no-undef,no-unused-vars
  static get [Symbol.species]() { return Array; }
}
var a = new MyArray(1,2,3);
var mapped = a.map(x => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array);   // true

// console.log(mapped);

/* ES5 Map Function */
// Array.prototype.map = function (callback) {
//     var returnValue = new Array(this.length);
//     this.forEach(function (item, index, array) {
//         returnValue[index] = callback(item, index, array);
//     });
//     return returnValue;
// }

/* ES6 Map Function */
// Array.prototype.map = function (callback) {
//     var Species = this.constructor[Symbol.species];
//     var returnValue = new Species(this.length);
//     this.forEach(function (item, index, array) {
//         returnValue[index] = callback(item, index, array);
//     });
//     return returnValue;
// }

/**
Array.get [Symbol.species]()
ArrayBuffer.get [Symbol.species]()
Map.get [Symbol.species]()
Promise.get [Symbol.species]()
RegExp.get [Symbol.species]()
Set.get [Symbol.species]()
%TypedArray%.get [Symbol.species]()
 */