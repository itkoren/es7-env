/**
 * Exploring the prototype chain and instanceof
 * 
 */
function Shape(color = 'red', borderThickness = 3.0) {
    // (A): using the instanceof operator to validate that we have a valid Shape object as the 'this' instance.
    //      if we found out that we don't have, we can manualy proxy the creation of the object and return a new valid instance.
    if (!(this instanceof Shape)) {                     
        return new Shape(color, borderThickness);
    }

    this.color = color;
    this.borderThickness = borderThickness;
}

let shape = new Shape();
console.log(`shape                                           => ${shape}`);

console.info('manually check the prototype chain');
console.log(`shape.__proto__ == Shape.prototype              => ${shape.__proto__ === Shape.prototype}`);
console.log(`shape.__proto__.__proto__ == Object.prototype   => ${shape.__proto__.__proto__ === Object.prototype}`);
console.dir();

// JavaScript provides an instanceof keyword that performs this check for you. 
console.info('using the `instanceof operator to check the type`');
console.log(`shape instanceof Shape                          => ${shape instanceof Shape}`);
console.log(`shape instanceof Object                         => ${shape instanceof Object}`);
console.dir();


// Problem when not instantiating the instance with 'new'
// (A): See above description
let shape2 = Shape();
console.log(`shape2                                          => ${shape2}`);
