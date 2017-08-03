/*
    
in this situation we have a 3 types of shapes, Rectangle, Circle, and Point.

we have a program that get's a list of shapes and get some information about them.

requirements>
shape class should be abstracted and implement's the usilities functions in the code.
execution of the code shuold run without errors and display the same results as in the comments.

Bonus: protect the creation of derived shapes.

*/

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
console.log('number of Points:', Point.getTotalCount());                                // 3

try{
    let e1 = new Shape();
    throw new Error('You should not enable the creation of an abstracted class.');
}catch(e){
    if(e instanceof AbstractClassException ){
        console.log(`Good job, you disable the creation of the abstracted class.` );     
        return;
    }
    console.error(e);     
    // e => AbstractClassException: Cannot create instance of an abstracted class
}

try{
    console.log('The biggest Shape is', Shape.maxArea(...[p1,...shapes]));
}catch(e){
    console.log('cannot calc biggest shape:' , e);
}