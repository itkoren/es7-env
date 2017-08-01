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
d.speak(d); // Mitzie barks.
d.__proto__.speak.call(d);
d.__proto__.__proto__.speak.call(d);

console.info('Prototype methods chain');
console.log(d.__proto__.speak === Dog.prototype.speak);
console.log(d.__proto__.__proto__.speak === Animal.prototype.speak);

console.info('Prototype Chain');
console.log(Animal.prototype.isPrototypeOf(d));
console.log(Dog.prototype.isPrototypeOf(d));

console.log('Static Inheritance');
console.log(Dog.AnimalTypes);
console.log(Animal.AnimalTypes === Dog.AnimalTypes);
