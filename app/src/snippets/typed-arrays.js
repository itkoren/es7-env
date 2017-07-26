
// typed arrays are arrays with all of their elements being the same type,
// and were created to handle binary data. they have two use cases:
// - manipulating binary data (e.g. canvas images, network protocols etc.)
// - interacting with native APIs more naturally

// they were created as a separate spec, initially for WebGL API, and
// added to the ECMA spec later.

console.dir(`
--- API realms ---
`);

console.dir(`
- data containers (ArrayBuffer) -
`); // hold the data as a sequence of bytes

console.info('direct instantiation:');

const byteLength = 3;
const buf = new ArrayBuffer(byteLength);

console.log(~~(buf[0])); // each byte is initially stored with 0
buf[0] = buf[0] | 0b10; // we can manipulate the bits in each byte, but it's a drag
console.log(buf[0]);
console.dir();

console.info('as remote API response...');
fetch('bundle.js') // fetch: XHR on steroids
  .then((res) => res.arrayBuffer())
  .then((buf) => console.dir(`
... fetch response:
is array buffer: ${buf instanceof ArrayBuffer}
`));

console.dir(`
- views (TypedArray/DataView) -
`);

// typed arrays interpret the array buffer as an indexed sequence of elements of a single type

console.info('TypedArray - no such thing:');
try {
  // the TypedArray is an intrinsic object, and is not available for instantiation
  new TypedArray();
} catch (ex) {
  console.error(ex);
}
console.dir();

console.info('<ElementType>Array - concrete implementations:');
// TypedArray's subclasses should be used for specific typed structures,
// e.g. an array full of signed integers in the range of one byte:
const int8Arr = new Int8Array(buf);
console.log('int array of 8 bit items:', int8Arr);
console.log('8 bits are one byte:', Int8Array.BYTES_PER_ELEMENT);
console.dir();

console.info('TypedArrays behave much like arrays:');
int8Arr[0] = 127;
int8Arr[1] = 0b1000001;
for (const i in int8Arr) {
  console.log(`${i} -> ${int8Arr[i]}`);
}
console.dir();


// data views let you access data as elements of several types (Uint8, Int16, Float32, etc.), at any byte offset inside an ArrayBuffer

console.info('DataView created for a portion of the buffer data:');

const vArr = new Int8Array([0, 10, 20, 30]); // 1-byte elements, for convenience
const view = new DataView(vArr.buffer, 1, 2);
console.log(`byteLength: ${view.byteLength}, byteOffset: ${view.byteOffset}
`);

console.log('access the elements:');
console.dir(view.getInt8(0));
console.dir(view.getInt8(1));
console.dir();

console.log(`let's try and grab both bytes in a single get:`);
console.dir(view.getInt16(0)); // -> 2580, wtf?

console.log('why 2580?');
// because each byte is stored with left zero-padding,
// and both of them are concatenated before read:
console.dir(`10,20 in binary: ${0b1010},${0b10100}`);
console.dir(`left-padded, to fit 8 bits: ${0b00001010},${0b00010100}`);
console.dir(`joined, as if they were a 16-bit value: ${0b0000101000010100}`);
console.dir();


console.dir(`
--- endianness ---
`); // the order of bytes inside a multiple byte element type, e.g. Uint16

// big endian: most significant byte first, so 0xABCD is stored as 0xAB,0xCD
// little endian: least significant byte first, so 0xABCD is stored as 0xCD,0xAB

// endianness is affected by the platform/CPU, and is consistent across APIs.
// the endianess of protocols or binary files varies.

console.info('my platform is little endian, observe:');

// store a single element of two bytes
let arr16 = Uint16Array.of(0xABCD);
// create a view of each byte, to observe the byte order
let arr8 = new Uint8Array(arr16.buffer);
// show the bytes, in order
for (const i in arr8) {
  console.log(`${i} -> ${arr8[i].toString(16)}`);
}


