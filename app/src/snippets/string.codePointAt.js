// the code-point of 'B' is 66
console.log('ABC'.codePointAt(1));

// unicode escape sequences work, too
console.log('\uD800\uDC00'.codePointAt(0));

// an index overflow will result in undefined
console.log('XYZ'.codePointAt(42));

