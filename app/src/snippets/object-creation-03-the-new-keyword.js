/**
 * So what exactly does the new keyword do?
 * When a function is invoked using new, the following occurs:
 * 
 *  1. A new instance of an object is created and its prototype (exposed via the __proto__ property)
 *     is set to the prototype property of the constructor function.
 *  2. The constructor function is invoked with the newly created object bound to the this property.
 *  3. If the function does not return a value, this is returned implicitly.
 * 
 *  ===> The `new` keyword is 'special', not the function itself.
 * 
 */

/** TODO: Run in a NODE without bable */
const isStrict = (function() { return !this; })();

 function Shape(color = 'red', borderThickness = 3.0) { 
    this.color = color;
    this.borderThickness = borderThickness;
    return this;
} 

console.log(`is Strict Mode:`, isStrict);
let notAShape = Shape();
console.log(notAShape); // what will this object resolve to? 

// *** constructor functions *must* be invoked via the new keyword or ```Bad Things``` will happen. ***


