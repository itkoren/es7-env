
/*
it's possible to intercept 'get' and 'apply', separately, but there is no single operation for method calls.
that's because method calls are viewed as two separate operations; a 'get' to retrieve a function, then an 'apply' to call that function.
*/

// to tackle this, let's intercept 'get' and return a function that intercepts the function call:
const traceMethodCalls = (obj) => {
  const handler = {
    get(target, propKey) {
      const origMethod = target[propKey];
      return function (...args) {
        const result = origMethod.apply(this, args);
        console.log(`${propKey}(${args}) -> ${result}`);
        return result;
      };
    }
  };
  return new Proxy(obj, handler);
};

// we're testing it with this object:
const obj = {
  multiply(x, y) {
    return x * y;
  },
  squared(x) {
    return this.multiply(x, x); // will this call be traced, too?
  },
};

const tracedObj = traceMethodCalls(obj);
console.log(tracedObj.multiply(2, 5));
console.log(tracedObj.squared(9));

