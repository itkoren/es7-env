'use strict';

console.log('');
console.log('Processing Object Literals:');
console.log('');

var getCarES5 = function(make, model, hand, value) {
	return {
		make: make,
		model: model,
    hand: hand,
		value: value,
		addHand: function() {
      this.hand += 1;
			this.value -= 2500;
		}
	};
};
var kiaES5 = getCarES5('Kia', 'Sorento', 2, 40000);
console.log(kiaES5);
kiaES5.addHand();
console.log(kiaES5);

const getCarES6 = (make, model, hand, value) => {
	return {
		// with property value shorthand
		// syntax, you can omit the property
		// value if key matches variable
		// name
		make,  // same as make: make
		model, // same as model: model
    hand,  // same as hand: hand
		value, // same as value: value

		// computed values now work with
		// object literals
		[`make${make}`]: true,

		// Method definition shorthand syntax
		// omits `function` keyword & colon
		addHand() {
      this.hand += 1;
			this.value -= 2500;
		},

    // computed methods now work with
		// object literals
		[`get${make}NextHand`]() {
      return this.hand + 1;
    }
	};
};
const kiaES6 = getCarES6('Kia', 'Sorento', 2, 40000);
console.log(kiaES6);
kiaES6.addHand();
console.log(kiaES6);
console.log(`The next buyer will have a ${kiaES6.getKiaNextHand()} hand Kia!`);

const getCarES6_2 = ({ make, model, hand, value }) => {
	return {
		// with property value shorthand
		// syntax, you can omit the property
		// value if key matches variable
		// name
		make,  // same as make: make
		model, // same as model: model
    hand,  // same as hand: hand
		value, // same as value: value

		// computed values now work with
		// object literals
		[`make${make}`]: true,

		// Method definition shorthand syntax
		// omits `function` keyword & colon
		addHand() {
      this.hand += 1;
			this.value -= 2500;
		},

    // computed methods now work with
		// object literals
		[`get${make}NextHand`]() {
      return this.hand + 1;
    }
	};
};
const make = 'Kia';
const model = 'Sorento';
const hand = 2;
const value = 40000;
const kiaES6_2 = getCarES6_2({ make, model, hand, value });
console.log(kiaES6_2);
kiaES6_2.addHand();
console.log(kiaES6_2);
console.log(`The next buyer will have a ${kiaES6_2.getKiaNextHand()} hand Kia!`);
