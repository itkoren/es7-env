'use strict'

/**
 * This concept will be explain in details in the Async I/O Session.
 */

// eslint-disable-next-line no-undef,no-unused-vars
const loadAccountConfigData = () => new Promise((resolve, reject) => {
    console.log('Starting Async Operation');
    const ACData = [
        { accountId: 'qa132456', agentId: '1234', role: 'admin' },
        { accountId: 'qa132456', agentId: '5678', role: 'agentManager' },
        { accountId: 'qa132456', agentId: '9101', role: 'agent' },
    ];

    setTimeout(() => {
        console.log('Ending Async Operation');
        return resolve(ACData);
    }, 2000);
});


// Using a named property
const acClient1 = {
    fetch: async function () {
        return await loadAccountConfigData();
    }
};

acClient1.fetch().then((value) => {
    console.log('The Value of the Promise...', value);
});

// The same object using shorthand syntax
const acClient2 = {
    async fetch() {
        return await loadAccountConfigData();
    }
};

acClient2.fetch().then((value) => {
    console.log('The Value of the Promise...', value);
});
