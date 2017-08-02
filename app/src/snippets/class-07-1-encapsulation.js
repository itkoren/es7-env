/*
    Scoped Symbols
    ==============
    // Here we can access elior's name and, with a little effort, age. ageKey is
    // not in scope, but we can obtain it by listing all Symbol properties on
    // elior with `Object.getOwnPropertySymbols(elior)`.
*/


let Person = (function () {
  let ageKey = Symbol('age');// eslint-disable-line no-unused-vars, no-undef
  let ganderKey = Symbol('gander')// eslint-disable-line no-unused-vars, no-undef

  class Person {
    constructor(name) {
      this.name = name; // this is public
      this[ageKey] = 20; // this is intended to be private
      this[ganderKey] = 'Male';
    }
    greet() {
      // Here we can access both name and age
      console.log(`name: ${this.name}, age: ${this[ageKey]}`);
    }
  }

  return Person;
})();

let elior = new Person('Elior');
elior.greet();


/* Same for Scoped WeakMap
let Person = (function () {
  let privateProps = new WeakMap(); // eslint-disable-line no-unused-vars, no-undef

  class Person {
    constructor(name) {
      this.name = name; // this is public
      privateProps.set(this, {age: 20}); // this is private
    }
    greet() {
      // Here we can access both name and age
      console.log(`name: ${this.name}, age: ${privateProps.get(this).age}`);
    }
  }

  return Person;
})();

let joe = new Person('Joe');
joe.greet();
*/