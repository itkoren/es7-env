'use strict';

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
} catch(ex) {
  console.log(ex);
  console.log(`Got to ${1e6 - counter} iterations`);
}

const fibonacci = function(x, y, limit, index) {
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
} catch(ex) {
  console.log(ex);
}
