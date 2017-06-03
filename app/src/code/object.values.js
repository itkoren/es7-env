'use strict';

const console = require('../utils/logger');

const rightsByRoles = {
  agent: [{
      id: 1,
      name: 'Chat'
    },
    {
      id: 2,
      name: 'Messaging'
    },
    {
      id: 3,
      name: 'Transfer'
    },
  ],
  manager: [{
      id: 4,
      name: 'Chat'
    },
    {
      id: 5,
      name: 'Messaging'
    }
  ],
  admin: [{
    id: 6,
    name: 'Settings'
  }]
};

console.log('\nProcessing Object.values:');
Object.values(rightsByRoles).forEach(rights => {
  rights.forEach(right => {
    console.log(right.name, `(ID: ${right.id})`);
  });
});
