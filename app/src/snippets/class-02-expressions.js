// TODO: Add Console Log Information for better reading.

// unnamed (name will be taken from the assigment name)
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

let rectangleInstance = new Rectangle(100,100);
// console.log(rectangleInstance);
console.log(typeof rectangleInstance);
console.log(typeof Rectangle);
console.log(Rectangle.name);
console.log(Rectangle.prototype.constructor.name);

// named (will be named after the class name in the decleration)
const PointClass = class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
};

let pointInstance = new PointClass(1,1);

console.log(typeof pointInstance);
console.log(typeof PointClass);
console.log(PointClass.name);
console.log(PointClass.prototype.constructor.name);

console.dir();



