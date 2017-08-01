// Note, as opposed to function decleration, class decleration are not hoisted.
// let invalid = new Rectangle(500,200); // ReferenceError: Rectangle is not defined
// console.success = console.log;

// Declaring the Class "Rectangle"
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Creating a new Recangle Instance
let rect = new Rectangle(100,50);
// Print instance properties
console.log(`height:${rect.height}, width: ${rect.width}`);
console.log('(rect.__proto__ === Rectangle.prototype)=>',rect.__proto__ === Rectangle.prototype);
console.log('(rect instanceof Rectangle)=>',rect instanceof Rectangle);

// Cannot instansiate without new
//let rect2 = Rectangle.call({}, 10, 20); // TypeError: Class constructor Rectangle cannot be invoked without 'new'