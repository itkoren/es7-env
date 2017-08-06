'use strict';

const trace = () => {
  if (console.trace) {
    console.trace();
  }
};

// TC / PTC - TCE / TCO / STC
const factorialNTC = n => { // NTC
  trace();
  if (n === 0) {
    return 1;
  }

  return n * factorialNTC(n - 1);
}
console.log(factorialNTC(4));

const factorialTC = (n, total = 1) => { // TC
  trace();
  if (n === 0) {
    return total;
  }

  return factorialTC(n - 1, n * total);
}
console.log(factorialTC(4));

let counter;
const recursion = num => {
  if (num <= 0) {
    return 'PTC';
  }

  counter = num;
  return recursion(num - 1);
};

try {
  console.log(recursion(1e6));
} catch (ex) {
  console.log(ex);
  console.log(`Got to ${1e6 - counter} iterations`);
}

const fibonacci = function (x, y, limit, index) {
  if (arguments.length === 1) {
    if (x) {
      return fibonacci(0, 1, x, 1);
    } else {
      return 0;
    }
  } else if (index < limit) {
    return fibonacci(y, (x + y), limit, index += 1);
  } else {
    return y;
  }
};

try {
  console.log(fibonacci(3));
  console.log(fibonacci(10));
  console.log(fibonacci(100000));
} catch (ex) {
  console.log(ex);
}
