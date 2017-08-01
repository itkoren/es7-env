class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }


    toString() {
        return `<Point>[x:${this.x}, y: ${this.y}]`;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }

    /**
     * Static Functions are Contextual
     */
    static ClassStaticFunc() {
        // use "this" as the reference to the Point Class Object
        return this;
    }
}

// As Before, we are Attaching the Constant on The Classes;
Point.CENTER = new Point(0, 0);


// Creating two points
const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

// Calculate the distance between two points using the Class Utility function 'distance'
console.log(`distance between the points: ${Point.distance(p1, p2)}`);
console.log(`calling the static function from the Point accessor: <${Point.ClassStaticFunc().name}>`);

const ClassStaticFuncRef = Point.ClassStaticFunc;
console.log(`calling the ref of the static function: <${ClassStaticFuncRef()}>`);

let instance = {
    toString() { return 'CustomInstance'; },
    ClassStaticFunc: Point.ClassStaticFunc
};
console.log(`calling to a ref from the Point to the instance: <${instance.ClassStaticFunc()}>`);

console.info(`Static Properties Access`);
console.log(`Poing.CENTER: ${Point.CENTER}`);
