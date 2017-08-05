class ExtendableError extends Error {
    constructor(message) {
        super(message);                                         // pass the message of the error to the base Error
        this.name = this.constructor.name;                      // will set the name of the error to the name of the calling class
        if (typeof Error.captureStackTrace === 'function') {    // Capture stack trace
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error(message)).stack;
        }
    }
}

class AbstractClassException extends ExtendableError {
    constructor(message = 'Cannot create instance of an abstracted class') {
        super(message);
    }
}

class NotImplementedException extends ExtendableError {
    constructor(message = 'Not Implemented') {
        super(message);
    }
}

class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new AbstractClassException();
        }
        Shape.instances.push(this);
    }

    get area() {
        throw new NotImplementedException('area');
    }

    static getCombinedArea(...shapes) {
        let shapesAreas = shapes.map(shape => shape.area);

        let sum = 0;
        shapesAreas.forEach((item) => { sum += item });
        return sum;
    }

    static maxArea(...shapes) {
        let shapesAreas = shapes.map(shape => shape.area);
        return Math.max(...shapesAreas);
    }

    static getTotalCount() {
        if (Shape === this) {
            return Shape.instances.length;
        } else {
            let derivedShapes = Shape.instances.filter((item) => {
                return item.constructor === this; // (item instanceof this) <= polymorphisem;
                
            });
            return derivedShapes.length;
        }
    }
}

Shape.instances = [];

// If you implemented this you fall into the inheritance trap.
// Point is not a shape!
class Point extends Shape {
    constructor(x, y) {
        super();
        this._x = x;
        this._y = y;
    }

    get area(){
        return 0;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this._width = width;
        this._height = height;
    }

    get area() {
        return this._width * this._height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this._radius = radius;
    }

    get area() {
        return (this._radius * this._radius * Math.PI);
    }
}

let r1 = new Rectangle(50, 100);
let r2 = new Rectangle(10, 10);
let c1 = new Circle(5);
let c2 = new Circle(10);
let c3 = new Circle(15);

let p1 = new Point(1,1);
let p2 = new Point(5,5);
let p3 = new Point(5,5);

const shapes = [r1, r2, c1, c2, c3];

console.log('The biggest Shape is: ', Shape.maxArea(...shapes));                        // 5000
console.log('The total of all the shapes is: ', Shape.getCombinedArea(...shapes));      // 6199.557428756428
console.log('number of shapes:', Shape.getTotalCount());                                // 8
console.log('number of Circles:', Circle.getTotalCount());                              // 3
console.log('number of Rectangles:', Rectangle.getTotalCount());                        // 2
console.log('number of Points:', Point.getTotalCount());																// 2

try{
    let e1 = new Shape();
    throw new Error('You should not enable the creation of an abstracted class.');
}catch(e){
    if(e instanceof AbstractClassException ){
        console.info(`Good job, you disable the creation of the abstracted class.` );     
    }else{
		    console.error(e);       
    }
    
    // e => AbstractClassException: Cannot create instance of an abstracted class
    
}

try{
    console.log('The biggest Shape is', Shape.maxArea(r1,r2,p1));
}catch(e){
    console.log('cannot calc biggest shape:' , e);
}