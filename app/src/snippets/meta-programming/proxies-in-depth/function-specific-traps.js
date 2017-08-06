
/*
if the proxy target is a function, two additional operations can be intercepted: 'apply' and 'construct'.
*/

function builder(name, age) {
  console.log('builder invoked');
  return {name, age};
}

const wrapper = new Proxy(builder, {

  construct(target, argList, newTarget) {
    console.log(`target called with 'new'`);
    argList[0] = 'johnny';
    return new target(...argList);
  },

  apply(target, thisArg, argList) {
    console.log('target called via dispatch');
    return target.apply(thisArg, argList);
  }
});

console.info('wrapper():');
console.log(wrapper(), '\n');

console.info('new wrapper():');
console.log(new wrapper(), '\n');

// why are these allowed only for functions?
