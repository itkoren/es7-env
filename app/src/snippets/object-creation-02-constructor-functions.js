let shape = {
    color: 'red',
    borderThickness: '2.0',
    describe: function () {
        console.log(`I am a ${this.color} shape, with a border that is ${this.borderThickness} thick`);
    }
};

console.info('basic shape object inspection');
console.log(`shape                                            => ${shape}`);
console.log(`shape.hasOwnProperty('describe')                 => ${shape.hasOwnProperty('describe')} `);
console.log(`shape.__proto__ === Object.prototype             => ${shape.__proto__ === Object.prototype}`); // Inherit from 'Object'
console.dir();

/**
 * If you were writing a drawing application you might want to create multiple instances of this object.
 * This is where the JavaScript concept of constructor functions comes in handy.
 */

function Shape(color, borderThickness) {
    this.color = color;
    this.borderThickness = borderThickness;
}

/**
 * You use a constructor function to create an object by invoking it with the new keyword:
 */
console.info('object instance inspection');
var shapeInstance = new Shape('red', 2.0);
console.log(`shapeInstance                                    => ${shapeInstance}`);
console.log(`shapeInstance.constructor === Shape              => ${shapeInstance.constructor === Shape}`);              // with prototype chain
console.log(`shapeInstance.__proto__.constructor === Shape    => ${shapeInstance.__proto__.constructor === Shape}`);    // dierct reference
console.log(`shapeInstance.__proto__ === Shape.prototype      => ${shapeInstance.__proto__ === Shape.prototype}`);
console.log(`shapeInstance.hasOwnProperty('describe')         => ${shapeInstance.hasOwnProperty('describe')}`);

try {
    shapeInstance.describe();
} catch (e) {
    console.error(e);
}

Shape.prototype.describe = function () {
    console.log(`I am a ${this.color} shape, with a border that is ${this.borderThickness} thick`);
};

try {
    shapeInstance.describe();
} catch (e) {
    console.error(e);
}

