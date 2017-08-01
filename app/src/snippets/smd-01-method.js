
const obj = {
  foo: function() {
    console.log('obj:foo');
  },
  bar: function() {
    console.log('obj:bar');
  }
};

obj.foo();
obj.bar();

// The shorthand syntax uses named function instead of anonymous functions
const shortObj = {
  foo() {
    console.log('shortObj:foo');
  },
  bar() {
    console.log('shortObj:foo');
  }
};

shortObj.foo();
shortObj.bar();