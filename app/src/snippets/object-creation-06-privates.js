/* 'object-creation-06-privates' */

/**
 * One of the key tenants of object oriented programming is the ability of objects to hide state and logic in order to exposure a simple interface.
 * Most object oriented languages have access modifiers which allow you to make methods, properties or variables private (or protected).
 * JavaScript does not have a first-class language feature that supports information hiding in the context of object creation.
 */

 function Shape(color, borderThickness) { 
    this.color = color;
    this.borderThickness = borderThickness;

    /* the _ prefix for the property is the generally accepted approach for implementing private state and private functions. */
    this._describeCount = 1;
}

Shape.prototype.describe = function() {
    console.log("I am a " + this.color + " shape, with a border that is " +
        this.borderThickness + " thick. I have told you this " + this._describeCount++ + " times.");
};

var shape = new Shape('blue',4.0);
console.log(`typeof shape._describeCount                => ${typeof shape._describeCount}`);
console.info('Calling describe 2 times');
shape.describe();
shape.describe();
console.dir();

console.info('calling describe after changing the `private` property');
shape._describeCount = 'abc'; // massing with the internals from the outside.
shape.describe();
console.dir();

/* private with scopes */
function Shape2(color, borderThickness) {
    var describeCount = 0, self = this;

    this.color = color;
    this.borderThickness = borderThickness;
    
    this.describe = function() {
           console.log("I am a " + self.color + " shape, with a border that is " +
        this.borderThickness + " thick. I have told you this " + describeCount++ + " times.");
    };
}

var shape2 = new Shape2('blue',4.0);
console.info('Calling describe on shape 2, the value in scopeded inside the constructor function');
shape2.describe();
console.log(typeof shape2.describeCount);
console.dir();