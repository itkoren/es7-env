
/*
levels of programming:
  - base level (application level): code processes user input
  - meta level: code processes base level code
*/


// base and meta level can be different languages:
const str = 'hello' + '!'.repeat(3);
console.log(`System.out.println("${str}")`);

// ...or the same language:
eval('console.log(5 + 7)');


// we are using meta-programming all the time:

// data structure (base level)
const obj = {
  hello() {
    console.log('Hello!');
  }
};
// programming construct (meta level)
for (const key of Object.keys(obj)) {
  console.log(key);
}

// Object.* methods can all be considered meta-programming

