'use strict';

const logger = require('./logger');

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

Object.entries(rightsByRoles).forEach(([role, rights]) => {
  logger.log('Role:', role);
  rights.forEach(right => {
    logger.log('  -', right.name, `(ID: ${right.id})`);
  });
  logger.log('');
});
