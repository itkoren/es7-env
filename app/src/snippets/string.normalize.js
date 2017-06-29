const str = '\u1E9B\u0323';

// Canonically-composed form (NFC) - the default
console.log('NFC:', str.normalize('NFC')); // '\u1E9B\u0323'

// Canonically-decomposed form (NFD)
console.log('NFD:', str.normalize('NFD')); // '\u017F\u0323\u0307'

// Compatibly-composed (NFKC)
console.log('NFKC:', str.normalize('NFKC')); // '\u1E69'

// Compatibly-decomposed (NFKD)
console.log('NFKD:', str.normalize('NFKD')); // '\u0073\u0323\u0307'
