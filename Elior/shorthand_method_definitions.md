# Shorthand method definitions
/*/* Presentation */*/
Starting with ECMAScript 2015, a shorter syntax for method definitions on objects initializers is introduced. It is a shorthand for a function assigned to the method's name.

## Syntax
```
var obj = {
  property( parameters… ) {},
  *generator( parameters… ) {},
  async property( parameters… ) {},
  async* generator( parameters… ) {},

  // with computed keys:
  [property]( parameters… ) {},
  *[generator]( parameters… ) {},
  async [property]( parameters… ) {},

  // compare getter/setter syntax:
  get property() {},
  set property(value) {}
};
```
/*/* Presentation */*/


### Methods

/// ** Note: The shorthand syntax uses named function instead of anonymous functions 


```
var obj = {
  foo: function() {
    /* code */
  },
  bar: function() {
    /* code */
  }
};
```

Shorthand:

```
var obj = {
  foo() {
    /* code */
  },
  bar() {
    /* code */
  }
};
```



### Generator methods

*** Snippet ***
```
// Using a named property
var obj2 = {
  g: function* () {
    var index = 0;
    while (true)
      yield index++;
  }
};

// The same object using shorthand syntax
var obj2 = { 
  * g() {
    var index = 0;
    while (true)
      yield index++;
  }
};

var it = obj2.g();
console.log(it.next().value); // 0
console.log(it.next().value); // 1
```

- the asterisk (*) in the shorthand syntax must be before the generator property name. That is, * g(){} will work but g *(){} will not;
- non-generator method definitions may not contain the yield keyword. This means that legacy generator functions won't work either and will throw a SyntaxError. Always use yield in conjunction with the asterisk (*).

### Async Methods
*** Async methods can also be defined using the shorthand syntax.
--- Will be in details in Async I/O
```
// Using a named property
var obj3 = {
  f: async function () {
    await some_promise;
  }
};

// The same object using shorthand syntax
var obj3 = { 
  async f() {
    await some_promise;
  }
};
```

#### Async generator methods
/// Generator methods can also be async.
```
var obj4 = {
  f: async function* () {
    yield 1;
    yield 2;
    yield 3;
  }
};

// The same object using shorthand syntax
var obj4 = {
  async* f() {
   yield 1;
   yield 2;
   yield 3;
  }
};
```

var bar = {
  foo0: function() { return 0; },
  foo1() { return 1; },
  ['foo' + 2]() { return 2; }
};

console.log(bar.foo0()); // 0
console.log(bar.foo1()); // 1
console.log(bar.foo2()); // 2