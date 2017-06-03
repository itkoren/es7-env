'use strict';
const console = require('../utils/logger');
console.log('Start Running Code!');

function my() {
  const a = 1;
  console.log('GGG');
  setTimeout(() => { console.log(a); }, 2000);
}

my(); 


