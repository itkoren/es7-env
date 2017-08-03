/* 'smd-03-method' */


const obj = {
  foo: function() {
    console.log('obj:foo');
  },
  bar: function() {
    console.log('obj:bar');
  }
};

console.info('obj methods');
obj.foo();
obj.bar();
console.dir();

// The shorthand syntax uses named function instead of anonymous functions
const shortObj = {
  foo() {
    console.log('shortObj:foo');
  },
  bar() {
    console.log('shortObj:foo');
  }
};

console.info('shortObj methods');
shortObj.foo();
shortObj.bar();
console.dir();