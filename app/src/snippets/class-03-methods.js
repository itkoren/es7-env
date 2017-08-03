/**
 * Prototype Methods
 */

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  
  // Property
  get area() {
    return this.calcArea();
  }

  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);
console.info('invoking the instance methods');
console.log(`squer area: ${square.area}`);
console.log(`squer area: ${square.calcArea()}`);
console.dir();

console.info('instance prototype has area and calcArea?');
console.log(`square.__proto__.hasOwnProperty('area')  `, square.__proto__.hasOwnProperty('area'));
console.log(`square.__proto__.hasOwnProperty('calcArea')  `, square.__proto__.hasOwnProperty('calcArea'));
console.dir();

console.info('instance has area and calcArea?');
console.log(`square.hasOwnProperty('area')  `, square.hasOwnProperty('area'));
console.log(`square.hasOwnProperty('calcArea')  `,square.hasOwnProperty('calcArea'));
console.dir();

