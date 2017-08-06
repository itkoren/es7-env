/*

The old default, just use a public property with an underscore prefix.
While not a private property by any stretch of the imagination,
this is easily the simplest, most readable, and fastest approach.
Thanks to the convention's prevalence it does a good job of communicating that the property should be private, and that often gets the job done.

*/

class Person {
  constructor(name) {
    this.name = name; // this is public
    this._age = 20; // this is intended to be private
  }
  greet() {
    // Here we can access both name and age
    console.log(`name: ${this.name}, age: ${this._age}`);
  }
}

let joe = new Person('Joe');
joe.greet();

// Here we can access both joe's name and age. But we know we aren't
// supposed to access his age, which just might stop us.