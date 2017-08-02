// Using a named property
let example1 = {
  g: function* () {
    var index = 0;
    // eslint-disable-next-line no-constant-condition
    while (true)
      yield index++;
  }
};

let it1 = example1.g();
console.log(it1.next().value); // 0
console.log(it1.next().value); // 1

// The same object using shorthand syntax
let example2 = { 
  * g() {
    var index = 0;
    // eslint-disable-next-line no-constant-condition
    while (true)
      yield index++;
  }
};

let it2 = example2.g();
console.log(it2.next().value); // 0
console.log(it2.next().value); // 1