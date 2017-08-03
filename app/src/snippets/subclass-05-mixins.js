const YEAR_MS = (1000 * 60 * 60 * 24 * 365.25);

// must implement `name` property
var greetingMixin = Base => class extends Base {
    greet() {
        console.log(`My name is ${this.name},i'm ${this.age} yo, Nice to meet you :)`);
    }
};

// must implement `bDate` property
var ageMixin = Base => class extends Base {
    get age() {
        return ((Date.now() - this.bDate) / YEAR_MS).toFixed(0);
    }
};

class Person {
    constructor(name, bDate) {
        this.name = name;
        this.bDate = bDate;
    }
}

class LivePerson extends ageMixin(greetingMixin(Person)) {
    
}

// Creating a new LivePerson :)
var elior = new LivePerson('Elior', new Date(1986, 6, 21));


// print the age of the instance 
console.info('using the ageMixin getter for age');
console.log(`elior.age: ${elior.age}`);
console.dir();

// pring greeting 
console.info('using the greet method from the greetingMixin');
elior.greet();
console.dir();


// Read more about mixins: https://github.com/justinfagnani/mixwith.js