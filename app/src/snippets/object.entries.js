'use strict';

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

console.log('');
console.log('Processing Object.entries:');
console.log('');
Object.entries(rightsByRoles).forEach(([role, rights]) => {
  console.log('Role:', role);
  rights.forEach(right => {
    console.log('  *', right.name, `(ID: ${right.id})`);
  });
  console.log('');
});
