
/*
there are many operations that you can perform on an object obj, like getting a property of an object (obj.prop), or checking whether an object has a property ('prop' in obj).

proxies enable to intercept and customize these operations. they are constructed from two objects:
- handler: provides methods (traps) with names corresponding to each operation, to intercept the operation.
- target: the object to be wrapped (and intercepted). it acts as a fallback for the handler.
 */

const target = {
  foo: 'foo!'
};

const handler = {

  get(target, propKey) { // <- it's a trap!
    console.log(`GET ${propKey}`);
    return 123;
  },

  has(target, propKey) { // <- it's a trap!
    console.log(`HAS ${propKey}`);
    return true;
  }
};

const proxy = new Proxy(target, handler);

// 'get' and 'has' operations will visit the handler traps before reaching the target:
console.log(proxy.wat);
console.log('wat' in proxy);

// 'set' is not intercepted by the handler, so the operation is forwarded to the target:
proxy.bar = 'bar!';
console.log(target.bar);


/*
proxies are stratified – base level (the proxy object) and meta level (the handler object) are separate.

some current meta-programming mechanisms can fail because they mix both levels, e.g. obj.hasOwnProperty, obj.__proto__, func.apply, func.call:
 */

// fail due to lack of stratification
try {
  ({ hasOwnProperty: null }.hasOwnProperty('wat'));
} catch (ex) {
  console.error(ex);
}
