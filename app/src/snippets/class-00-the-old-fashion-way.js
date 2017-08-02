

function Shape(color) {
    this.color = color;
}

Shape.prototype.color = 'brown';
Shape.prototype.getColor = function () {
    return this.color;
}

/*
Rectangle is a constructor function.
Even though there were no classes in ES5, many people called constructor functions and their prototype extensions classes.
*/
function Rectangle(color, width, height) {
    Shape.call(this, color);
    this.width = width;
    this.height = height;

    this.privateFunction = () => { console.log(`i'm a private function in the instance`) }
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};


let rectangle = new Rectangle('red', 5, 8);

rectangle.privateFunction();
console.log(rectangle.privateFunction());
console.log(rectangle.hasOwnProperty('privateFunction'));
console.log(rectangle.__proto__.hasOwnProperty('privateFunction'));
console.log(rectangle.__proto__.__proto__.hasOwnProperty('privateFunction'));
console.log(rectangle.__proto__.__proto__.__proto__.hasOwnProperty('privateFunction'));
console.dir();

console.info('rectangle methods');
console.log(rectangle.getArea());
console.log(rectangle.hasOwnProperty('getArea'));
console.log(rectangle.__proto__.hasOwnProperty('getArea'));
console.log(rectangle.__proto__.__proto__.hasOwnProperty('getArea'));
console.log(rectangle.__proto__.__proto__.__proto__.hasOwnProperty('getArea'));
console.dir();

console.log(rectangle.getColor());
console.log(rectangle.hasOwnProperty('getColor'));
console.log(rectangle.__proto__.hasOwnProperty('getColor'));
console.log(rectangle.__proto__.__proto__.hasOwnProperty('getColor'));
console.log(rectangle.__proto__.__proto__.__proto__.hasOwnProperty('getColor'));
console.dir();

console.log(rectangle.toString());
console.log(rectangle.hasOwnProperty('toString'));
console.log(rectangle.__proto__.hasOwnProperty('toString'));
console.log(rectangle.__proto__.__proto__.hasOwnProperty('toString'));
console.log(rectangle.__proto__.__proto__.__proto__.hasOwnProperty('toString'));
console.dir();

console.log('inharitance chain');
console.log(rectangle instanceof Rectangle);
console.log(rectangle instanceof Shape);
console.log(rectangle instanceof Object);
console.dir();

// What will this will print?
console.info(`What will this will print?
rectangle.__proto__.__proto__.getColor();






















`);
console.log(rectangle.__proto__.__proto__.getColor());