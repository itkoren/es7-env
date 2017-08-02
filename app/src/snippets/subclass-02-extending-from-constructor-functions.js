function Animal (name) {
  this.name = name;  
}

Animal.prototype.speak = function () {
  console.log(this.name + ' makes a noise.');
}

// Static Member for Animal Class
Animal.AnimalTypes = {DOG: 'DOG', CAT:'CAT'};

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}

var d = new Dog('Boldog');
d.speak(d);                             // direct method call
d.__proto__.speak.call(d);              // from the instance prototype
d.__proto__.__proto__.speak.call(d);    // from the parent prototype

console.info('Prototype methods chain');
console.log(`d.__proto__.speak === Dog.prototype.speak              => ${d.__proto__.speak === Dog.prototype.speak}`);
console.log(`d.__proto__.__proto__.speak === Animal.prototype.speak => ${d.__proto__.__proto__.speak === Animal.prototype.speak}`);

console.info('Prototype Chain');

console.log(`d instanceof Animal  => ${d instanceof Animal}`);
console.log(d instanceof Dog);
console.log(Animal.prototype.isPrototypeOf(d));
console.log(Dog.prototype.isPrototypeOf(d));

// Direct Prototype
console.log(d.constructor.name);
console.log(Object.getPrototypeOf(d) === d.constructor.prototype);

console.log('Static Inheritance');
console.log(Dog.AnimalTypes);
console.log(Animal.AnimalTypes === Dog.AnimalTypes);
