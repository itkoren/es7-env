
/*
proxies are used in two roles:
- wrappers: to control access to their targets.
- virtual objects: as objects with special behavior - their targets don't matter.
 */


console.dir(`

- wrapper example: tracing proxy -
`);

const colors = [
  'red', 'green', 'blue'
];

const removalTracer = {
  deleteProperty(target, propKey) {
    console.log(`removing '${target[propKey]}'`);
    return delete target[propKey]; // forward the operation
  }
};

const wrapper = new Proxy(colors, removalTracer);

delete wrapper[0];
delete wrapper[100];


console.dir(`

- virtual object example: remoting proxy -
`);

const remote = {
  apply(target, thisArg, argList) {
    const base = 'http://localhost:3000';
    const path = argList.shift();
    console.log(`sending request for '${path}'`);
    return fetch(`${base}/${path}`, ...argList); // don't forward the operation
  }
};

const virtual = new Proxy(function() {}, remote);

virtual('bundle.js').then(res => console.success(res.status));
