/**
 *  JavaScript objects are pretty simple things:
 *  - a 'bag' of properties combined with a 'hidden' prototype that allows property inheritance.
 */

// Objects are dynamic in that you can add and remove properties after they have been created
let shape = {}; 
shape.color = 'red';
shape.borderThickness = '2.0';
console.log('shape:', shape);

// OR (Object Initializer)
let shape2 = { 
    color : 'red',
    borderThickness : '2.0'
}
console.log('shape2:', shape2);

// OR (Instance Creation)
let shape3 = new Object(); 
shape3.color = 'red';
shape3.borderThickness = '2.0';
console.log('shape3:' ,shape3);

// __proto__ - was not defined, but created automagicaly
// The __proto__ property points to this object's prototype.
console.log(`shape.__proto__ === Object.prototype  => ${shape.__proto__ === Object.prototype}`);   // Object
console.log(`shape2.__proto__ === Object.prototype => ${shape2.__proto__ === Object.prototype}`);  // Object
console.log(`shape3.__proto__ === Object.prototype => ${shape3.__proto__ === Object.prototype}`);  // Object

/**
 * This reveals the true nature of inheritance in JavaScript which revolves around a chain of prototypes.
 * If you try to access a property of an object (whether that property is a value or a function),
 * and it is not present on the object itself,
 * the JavaScript runtime then checks the object's prototype.
 *     If the property is found on the prototype
 *         it is returned 
 *     If not, the next prototype is inspected, all the way up the prototype chain. (until __proto__ === null)
 */