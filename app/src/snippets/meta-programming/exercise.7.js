
/*
use proxies to create an array which allows negative indices, e.g. arr[-1]
 */

const createArray = (...elements) => {
  // TODO - your code here
};


// invoke your fabulous function and get the magic array
const arr = createArray('a', 'b', 'c');


// test area, surrounded with try/catch for convenience
try {

  // test negative index access:
  console.log(arr[-1]); // -> c
  console.log(arr[-3]); // -> a


  /*
  bonus: make it a cyclic array (where index overflow never occurs)
   */
  // test any index overflow
  // console.log(arr[3]); // -> a
  // console.log(arr[-4]); // -> c


} catch (ex) {
  console.error(ex);
}
