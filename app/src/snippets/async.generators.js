'use strict';

console.log('');
console.log('Processing Generators:');
console.log('');

function* numbersGenerator() {
  yield 10,
  yield 20,
  yield 30
}

const numbersIterator = numbersGenerator();

console.log(numbersIterator.next());
// { value: 1, done: false }

console.log(numbersIterator.next());

console.log(numbersIterator.next());

console.log(numbersIterator.next());



console.log('');
console.log('##########################');
console.log('##########################');
console.log('##########################');
console.log('');



for (const number of numbersGenerator()) {
  console.log(number);
}




console.log('');
console.log('##########################');
console.log('##########################');
console.log('##########################');
console.log('');




const data = [
  { id: '0' },
  {
    id: '1',
    children: [
      {
        id: '1.1',
        children: [
          {
            id: '1.1.1',
            children: [
              {
                id: '1.1.1.1',
                children: [
                  { id: '1.1.1.1.1' },
                  { id: '1.1.1.1.2' },
                  { id: '1.1.1.1.3' }
                ]
              },
              { id: '1.1.1.2' },
              { id: '1.1.1.3' }
            ]
          },
          { id: '1.1.2' },
          { id: '1.1.3' },
        ]
      },
      { id: '1.2' },
      { id: '1.3' }
    ]
  },
  { id: '2' },
  { id: '3' }
];

function *processData(data) {
  if (!data) {
    return;
  }

  for (let i = 0; i < data.length; i++) {
    const val = data[i];
    yield val.id;

    if (val.children) {
      yield *processData(val.children);
    }
  }
}

const iterator = processData(data);
let result = iterator.next();

while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}
