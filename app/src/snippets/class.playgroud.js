// /**
//  * Creating a basic Class Definition. 
//  * ==================================
//  * 
//  * 
//  */

// class NetworkException extends Error {
//   constructor(message) {
//     super(message);
//     this.name = 'NetworkException';
//   }
// }

// function errorThrower() {
//   throw new NetworkException('Port is not defined');
// }

// function testError() {
//   try {
//     errorThrower();
//   } catch (e if e instanceof NetworkException) {
//     console.log('Specific Error:', e);
//   } catch (e) {
//     console.log('Generic Error:', e);
//   }
// }

// //e if e instanceof TypeError

// testError();
