/*The extends keyword is used in class declarations or class expressions to create a class as a child of another class.*/
/* Calling super in a constructor should happen before accessing this. As a rule of thumb:*/ 
console.error('TODO: Aligment of the Console readability');

class Person {
    constructor(name, id) {
        this._name = name;
        this._id = id;
        Person.instancePool.push(this);
    }

    get name() { return this._name; }

    set name(value) {
        if (typeof value !== 'string') throw new TypeError('Invalid Person Name, must be of type string');
        if (value.length < 3) throw new Error('name must be at least 3 char in length')
        if (value.split(' ').length < 2) throw new Error('name must be composed of two parts, first name and last name');

        this._name = value;
    }

    get id() { return this._id; }

    toString() {
        return `<${this.__proto__.constructor.name}>Name:${this.name}, Id: ${this.id}`;
    }
}

Person.instancePool = [];

class Employee extends Person {
    constructor({ name, id, workplace, jobTitle }) {
        // this super must be called before any new assigment to the "this" object.
        super(name, id);
        this._workerId = Math.random();
        this._workplace = workplace;
        this._jobTitle = jobTitle;
    }

    get workplace() { return this._workplace; }

    toString() {
        return `${super.toString()}, ${this._workplace}, ${this._jobTitle}`;
    }
}


const person = new Person('John Dho', '00000000');
console.log(`Person info: ${person}`);
console.log(`instance of <Person> : ${person instanceof Person}`);
console.log(`instance of <Object> : ${person instanceof Object}`);
console.log(`number of known persons:`, Person.instancePool.length);

try {
    person.name = 'Jo'; //Error: name must be at least 3 char in length 
} catch (e) {
    console.error(e);
}

try {
    person.name = 'Moshe'; //Error: name must be composed of two parts, first name and last name
} catch (e) {
    console.error(e);
}

try {
    person.name = 123; // TypeError: Invalid Person Name, must be of type string
} catch (e) {
    console.error(e);
}

person.name = 'Moshe Ben Ari';
console.log(`Person info: ${person}`);

const employee = new Employee({
    name: 'Elior Cohen',
    id: '123456',
    workplace: 'LivePerson',
    jobTitle: 'Full-Stack Dev'
});

console.log(`Employee info: ${employee}`);
console.log(`instance of <Employee> : ${employee instanceof Employee}`);
console.log(`instance of <Person> : ${employee instanceof Person}`);
console.log(`instance of <Object> : ${employee instanceof Object}`);

console.log(`number of known persons:`, Person.instancePool.length);
Person.instancePool.forEach(item => console.log(item.toString()));

/**
    Advantages of getters and setters:
    =================================
    Elimination of redundancy: computed fields can be derived using an algorithm depending on other properties.
    Easier debugging: just add debugging commands or breakpoints to a setter, and you will know what caused a value to change.

 */