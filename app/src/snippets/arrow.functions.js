'use strict';

console.log('');
console.log('Processing Arrow Functions:');
console.log('');

const names = ['Java', 'Coffe', 'Type'];
const fullNames = names.map(function(name){
  return name + 'Script';
});

console.log(fullNames);

console.log(names.map(name => name + 'Script'));

function Counter(limit) {
  const that = this;

  this.limit = limit || 4;

  this.tick = () => {
    if (this.limit) {
      console.log(this === that);

      this.limit--;

      this.timer = setTimeout(() => {
        console.log(this === that);

        this.tick();
      }, 1000);
    }
  };

  this.tick();
}

new Counter(5);
