/*

a weak collection is a collection that doesn't prevent
its references from being garbage-collected.

- enables associating data with objects without memory-leaks
- iteration over its content is not allowed, due to the volatility of the data
- clear() is not available, as a security constraint (mutation to the internal
mapping is allowed only if you have the collection and the key)

*/


console.dir(`
--- WeakSet ---
`); // elements are held as weak references

// since no iteration is allowed, there's not much to do with weak-sets, perhaps
// besides using them to mark values (instead of a bunch of boolean flag variables)
console.info(`rarely used...
`);


console.dir(`
--- WeakMap ---
`); // keys are held as weak references, keys must be objects


console.info(`use case: private data
`);

let _counter = new WeakMap();

function Countdown(counter, action) {
  _counter.set(this, counter);
}

Countdown.prototype.decrement = function() {
  let counter = _counter.get(this);
  counter--;
  _counter.set(this, counter);
  return counter;
};


let c = new Countdown(2);

console.log(`counting down from 2:
  ${c.decrement()},${c.decrement()},${c.decrement()}
`);

let ownKeys = Object.getOwnPropertyNames(c);
console.log('nothing was saved on the instance, so no keys:', ownKeys);

// cut the reference, so the _counter map value
// can be cleared on the next GC sweep
c = null;

console.dir();

console.info(`use case: attach volatile data to dom nodes
`);

const nodeMap = new WeakMap();

const createVolatileNode = (name, details) => {
  let node = document.createElement('div');
  node.className = name;
  nodeMap.set(node, details);

  // the dom will hold a reference to our node
  // well after the function execution has ended
  document.body.appendChild(node);
  console.log(`'${name}' is here!`);

  // let's let the node linger a bit, and then cut that reference
  setTimeout(() => {
    document.body.removeChild(node);
    console.log(`'${name}' is gone...`);
  }, 10000 * nodeMap.get(node).linger );
};

// create a bunch of nodes
createVolatileNode('shosh', {
  smell: 0.8, loudness: 0.1, linger: 0.5
});
createVolatileNode('froike', {
  smell: 0.7, loudness: 0.6, linger: 0.3
});
createVolatileNode('arik bar droma', {
  smell: 0.1, loudness: 1.0, linger: 0.1
});

// the same technique can be used to safely handle ghost event-listeners

// reference: http://israblog.nana10.co.il/blogread.asp?blog=262964&blogcode=4260608


