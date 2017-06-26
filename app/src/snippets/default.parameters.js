'use strict';

console.log('');
console.log('Processing Default Parameters:');
console.log('');

const calcPay1 = (salary, bonus) => salary + bonus;
console.log(calcPay1(22000, 10000));
console.log(calcPay1(22000));

const calcPay2 = (salary, bonus = 0) => salary + bonus;
console.log(calcPay2(22000 + 10000));
console.log(calcPay2(22000));
