// https://github.com/littledan/proposal-unified-class-features


/*
While ES2015 Javascript lacks the concept of visibility keywords,
we can still achieve the same thing without them. This is why I really like Javascript,
it doesn’t give you one way or the highway, but lets you implement creative solutions to problems.

Supersets like TypeScript while they have concepts of visibility keywords,
they’re not for the resulting output but only for the compiling stage where your code is checked.
It will stop you if you are trying to illegally reference a private property or method.
*/

const $this = new WeakMap(); // eslint-disable-line no-unused-vars, no-undef

// Private function for lowercasing a string
function _convertToLowercase(val) {
    return val.toLowerCase();
}

class Person {
    constructor(name, dob) {
        $this.set(this, {name: name, dob: dob});
    }

    get name() {
        return _convertToLowercase($this.get(this).name);
    }

    get dob() {
        return $this.get(this).dob;
    }
}

const person = new Person('ElIOr', 'abc');
console.log(`person.name  => ${person.name}`);
console.log(`person.dob  => ${person.dob}`);

