'use strict'

function createKitten(fullName, birthDate) {
  // Your Code Here
  // Create a function which builds the name object
  // Implement as an 'arrow function' and use 'let' and 'distructuring' in your implementation
  const buildNameObject = () => {
    let { 0: first, 1: last } = fullName.split(/ (.+)/);
    return {
      first: first,
      last: last
    };
  };

  // Your Code Here
  // Create a function which builds the birth object
  // Implement as an 'arrow function'
  const buildBirthObject = () => {
    return {
      year: birthDate.getFullYear(),
      month: birthDate.getMonth(),
      day: birthDate.getDate()
    };
  };

  // Your Code Here
  // Return kitten Object with the following structure:
  // {
  //		name: {
  //			first: 'Van'
  //			last: 'Damme'
  //		},
  //		birth: {
  //			year: 1975,
  //			month: 3,
  //			day: 11
  //		}
  //	}

  return {
    name: buildNameObject(),
    birth: buildBirthObject()
  };
}

const kitten1 = createKitten('Van Damme', new Date(1975, 3, 11));

// Your Code Here
// Use destructuring to extract name.last and birth.day from kitten
// Use 'let' and 'distructuring' in your implementation
let { name: { last: lastName }, birth: { day: birthDay } } = kitten1;
console.log(lastName); // => "Damme"
console.log(birthDay); // => 11

const kitten2 = createKitten('Moshe Ufnick', new Date(1982, 1, 20));
const kitten3 = createKitten('Kipi Ben Kipod', new Date(1982, 6, 22));
const kitten4 = createKitten('Darth Vader', new Date(1977, 4, 18));
const kitten5 = createKitten('Java Script', new Date(1995, 5, 15));
const kittens = [kitten1, kitten2, kitten3, kitten4, kitten5];

// Your Code Here
// Create a tag template literals to calculate and return the youngest kitten name and birth date
// Implement as an 'arrow function' and use 'let', 'const' and 'template literals' in your implementation
const tagYoungestKitten = (parts, kittens) => {
  let youngestDate;
  let youngestKitten;

  kittens.forEach(kitten => {
    const birthDate = new Date(kitten.birth.year, kitten.birth.month, kitten.birth.day);
    if (!youngestDate || youngestDate < birthDate) {
      youngestDate = birthDate;
      youngestKitten = kitten;
    }
  });

  return `${youngestKitten.name.first} ${youngestKitten.name.last}${parts[1] || ''} ${youngestDate.toDateString()}`;
};

const tagged = tagYoungestKitten`${kittens} is the youngest! He was born on`;
console.log(tagged); // => "Java Script is the youngest! He was born on Thu Jun 15 1995"

// Your Code Here
// Create a function which makes an kitten really important
// The exact number of 'really' and exclamation marks should be configurable,
// but by default, it should be equal to the number of words in the name of the kitten
// use 'let' and 'template literals' in yuor implementation
function makeKittenImportant(kitten, num = `${kitten.name.first} ${kitten.name.last}`.split(' ').length) {
  let really = '';
  let em = '';
  for (let i = 0; i < num; i++) {
    really += ' really';
    em += '!';
  }

  console.log(`${kitten.name.first} ${kitten.name.last} is${really} important${em}`);
}

makeKittenImportant(kitten2, 3) // => "Moshe Ufnick is really really really important!!!"
makeKittenImportant(kitten3)    // => "Kipi Ben Kipod is really really really important!!!"
makeKittenImportant(kitten4)    // => "Darth Vader is really really important!!"
makeKittenImportant(kitten4, 4) // => "Darth Vader is really really really really important!!!!"
