// TODO: Add Console Log Information for better reading.

// unnamed (name will be taken from the assigment name)
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

let rectangleInstance = new Rectangle(100,100);
console.info('Rectangle class Name')
console.log(`rectangleInstance.constructor.name     => ${rectangleInstance.constructor.name}`);
console.log(`Rectangle.name                         => ${Rectangle.name}`);
console.log(`Rectangle.prototype.constructor.name   => ${Rectangle.prototype.constructor.name}`);
console.dir();

// named (will be named after the class name in the decleration)
const PointClass = class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
};

let pointInstance = new PointClass(1,1);
console.info('Point Class Name');
console.log(`pointInstance.constructor.name         => ${pointInstance.constructor.name}`);
console.log(`PointClass.name                        => ${PointClass.name}`);
console.log(`PointClass.prototype.constructor.name  => ${PointClass.prototype.constructor.name}`);
console.dir();



