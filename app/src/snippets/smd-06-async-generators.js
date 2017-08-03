// const ACData = [
//         { accountId: 'qa132456', agentId: '1234', role: 'admin' },
//         { accountId: 'qa132456', agentId: '5678', role: 'agentManager' },
//         { accountId: 'qa132456', agentId: '9101', role: 'agent' },
//     ];

// var regularAsyncGenerator = {
//   f: async function* () {
//     yield ACData[1];
//     yield ACData[2];
//     yield ACData[3];
//   }
// };

// // The same object using shorthand syntax
// var shortAsyncGenerator = {
//   async* f() {
//     yield ACData[1];
//     yield ACData[2];
//     yield ACData[3];
//   }
// };

// regularAsyncGenerator.f();