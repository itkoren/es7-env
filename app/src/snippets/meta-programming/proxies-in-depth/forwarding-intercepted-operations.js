
console.dir(`
- forwarding intercepted operations -
`);

let tracer, proxy;

const obj = { foo: 'bar' };

/*
to intercept operations without preventing them from reaching the target, we can forward the operation. we've seen this with the tracing proxy. here's another one:
*/

tracer = {
  get(target, propKey) {
    console.log(`get '${propKey}'`);
    return target[propKey]; // forward the operation
  },
  has(target, propKey) {
    console.log(`has '${propKey}'`);
    return propKey in target; // forward the operation
  },
  // etc. etc.
};

proxy = new Proxy(obj, tracer);

proxy.foo;
'foo' in proxy;

console.dir();



/*
the module-like object Reflect helps with forwarding; for each handler trap, Reflect has a static method with the same signature.
 */

tracer = {
  get(target, propKey) {
    console.log(`get '${propKey}'`);
    return Reflect.get(target, propKey); // forward the operation
  },
  has(target, propKey) {
    console.log(`has '${propKey}'`);
    return Reflect.has(target, propKey); // forward the operation
  },
};

proxy = new Proxy(obj, tracer);

proxy['foo'];
'foo' in proxy;

console.dir();



/*
now the program construct of the traps is so similar, we might as well implement the handler via a proxy:
*/

tracer = new Proxy({}, {
  get(target, trapName, receiver) {
    // return the handler method named trapName
    return function (...args) {
      console.log(`${trapName} '${args[1]}'`);
      return Reflect[trapName](...args); // forward the operation
    }
  }
});

proxy = new Proxy(obj, tracer);

proxy['foo'];
'foo' in proxy;
proxy['foo'] = true;
delete proxy['foo'];
proxy instanceof String;

console.dir();
