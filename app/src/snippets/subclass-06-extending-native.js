// Creating an ExtendableError from the native 'Error' Object.
class ExtendableError extends Error {
  constructor(message) {
    super(message);                                         // pass the message of the error to the base Error
    this.name = this.constructor.name;                      // will set the name of the error to the name of the calling class
    if (typeof Error.captureStackTrace === 'function') {    // Capture stack trace
      Error.captureStackTrace(this, this.constructor);
    } else { 
      this.stack = (new Error(message)).stack; 
    }
  }
}    

// extending Error from Extendable Error
class MyError extends ExtendableError {}

var myerror = new MyError("my error is in the air...");
console.info('inspection of the error');
console.log(`myerror.message            => ${myerror.message}`);
console.log(`myerror instanceof Error   => ${myerror instanceof Error}`);
console.log(`myerror.name               => ${myerror.name}`);
console.log(`myerror.stack              => ${myerror.stack}`);

/*
    - This will print MyError in the stack, and not the generic Error.
    - It will also add the error message to the stack trace
    - It will also use captureStackTrace if it's available.
*/