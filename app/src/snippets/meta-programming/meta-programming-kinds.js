/*
reflective meta-programming (a program processing itself), has three kinds:
  - introspection: read-only access to the structure of a program
  - self-modification: the ability to change that structure
  - intercession: the ability to redefine the semantics of language operations
*/


// introspection (Object.values):

const data = 'wat';
const values = Object.values(data);
console.log(values);


// self-modification (assignment and deletion):

const moveProp = (source, propName, target) => {
  target[propName] = source[propName];
  delete source[propName];
};
const obj1 = { foo: 'bar' };
const obj2 = {};
moveProp(obj1, 'foo', obj2);
console.log(obj1, obj2);


// intercession (Proxy API):

const obj = { foo: 'bar' };
const proxy = new Proxy(obj, {
  get(target, propKey) {
    return true;
  }
});
console.log(proxy.isTrue);
