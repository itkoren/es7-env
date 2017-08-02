/*
    Getters and setters are used to create computed properties.
*/
class Square {
    constructor( width ) { this.width = width; }
    get height() {
        console.log( 'get height' );
        return this.width;
    }
    set height( h ) {
        console.log( 'set height', h );
        this.width = h;
    }

    //Note that area only has a getter. Setting area does not change anything, as area is a computed property that depends on the width of the square.
    get area() { 
        console.log( 'get area' );
        return this.width * this.height;
    }    
}


let square = new Square( 5 );
console.info('square of 5')
console.log(`square.width       => ${square.width}`);
console.log(`square.height      => ${square.height}`);
console.log(`square.area        => ${square.area}`);
console.dir();
// setting the "height" of the Square
console.info('square of 6..');
square.height = 6;
console.log(`square.width       => ${square.width}`);
console.log(`square.height      => ${square.height}`);
console.log(`square.area        => ${square.area}`);
console.dir();
