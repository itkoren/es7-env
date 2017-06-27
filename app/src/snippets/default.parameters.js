'use strict';

console.log('');
console.log('Processing Default Parameters:');
console.log('');

const calcPay1 = (salary, bonus) => salary + bonus;
console.log(calcPay1(22000, 10000));
console.log(calcPay1(22000));

const calcPay2 = (salary, bonus = 0) => salary + bonus;
console.log(calcPay2(22000, 10000));
console.log(calcPay2(22000));

const calcPay3 = (salary = 22000, bonus, raise = 1000) => salary + bonus + raise;
console.log(calcPay3(30000, 10000));
console.log(calcPay3(void 0, 1000));

const argsAssign = function(first = 'baz',
                            second = 'qux',
                            third = 'voux') {
  first = 'corge';

  console.log('first: ' + first);
  console.log('second: ' + second);
  console.log('third: ' + third);

  // The arguments object is not mapped to the
  // parameters, even outside of strict mode.
  return arguments.length === 2
    && arguments[0] === 'foo'
    && arguments[1] === 'bar';
};

console.log(argsAssign('foo', 'bar'));

const singularPlural = (singular,
                        plural = singular + 's',
                        war = plural + ' ATTACK!!!') => {
  return [singular, plural, war];
};

console.log(singularPlural('Cat'));
