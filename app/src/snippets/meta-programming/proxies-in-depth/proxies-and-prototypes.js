let obj, proxy;

console.dir(`
- target with a prototype -
`);

// a way to fool the 'in' operator to only look for own properties:

obj = Object.create({foo: 'bar'});
console.log('foo' in obj);

proxy = new Proxy(obj, {
  has(target, propKey) {
    return target.hasOwnProperty(propKey);
  }
});
console.log('foo' in proxy);


console.dir(`
- proxy as prototype -
`);

// a proxy can become the prototype of an object. some operations that begin in the object may continue in the proxy prototype, e.g. 'get':

proxy = new Proxy({}, {
  get(target, propKey, receiver) {
    console.log('GET ' + propKey);
    return target[propKey];
  }
});

obj = Object.create(proxy);
console.log(obj.foo);

// 'foo' can't be found in obj, so the search continues in the prototype chain and the 'get' trap is triggered there.
