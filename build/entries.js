'use strict';

import path from 'path';
import files from './files';

const dynamicEntries = [];
const current = {
  entries: []
};
const staticEntries = [];
const alwaysEntries = [
  path.resolve(__dirname, '..', 'app', 'src', 'index')
];

files.forEach(file => {
  staticEntries.push(path.resolve(__dirname, '..', 'app', 'src', 'snippets', file));
});

function clearDynamic(noUpdate) {
  dynamicEntries.length = 0;

  if (!noUpdate) {
    getEntries(current.type);
  }
}

function addDynamicEntry(entry, noUpdate) {
  dynamicEntries.push(entry);

  if (!noUpdate) {
    getEntries(current.type);
  }
}

function setSingleDynamicEntry(entry, noUpdate) {
  clearDynamic(true);
  addDynamicEntry(entry, true);

  if (!noUpdate) {
    getEntries(current.type);
  }
}

function getEntries({ all, staticIfNoDynamic, alwaysIfNoDynamic, dynamicIfNoStatic, onlyDynamic, onlyStatic, onlyStaticNoAlways, onlyAllways }) {
  current.entries.length = 0;

  if (all) {
    current.type = { all: true };
    current.entries.push.apply(current.entries, alwaysEntries.concat(dynamicEntries.concat(staticEntries)));
  } else if (staticIfNoDynamic) {
    current.type = { staticIfNoDynamic: true };
    if (0 < dynamicEntries.length) {
      current.entries.push.apply(current.entries, alwaysEntries.concat(dynamicEntries));
    } else {
      current.entries.push.apply(current.entries, alwaysEntries.concat(staticEntries));
    }
  } else if (dynamicIfNoStatic) {
    current.type = { dynamicIfNoStatic: true };
    if (0 < staticEntries.length) {
      current.entries.push.apply(current.entries, alwaysEntries.concat(staticEntries));
    } else {
      current.entries.push.apply(current.entries, alwaysEntries.concat(dynamicEntries));
    }
  } else if (alwaysIfNoDynamic) {
    current.type = { alwaysIfNoDynamic: true };
    if (0 < dynamicEntries.length) {
      current.entries.push.apply(current.entries, alwaysEntries.concat(dynamicEntries));
    } else {
      current.entries.push.apply(current.entries, alwaysEntries);
    }
  } else if (onlyDynamic) {
    current.type = { onlyDynamic: true };
    current.entries.push.apply(current.entries, alwaysEntries.concat(dynamicEntries));
  } else if (onlyStatic) {
    current.type = { onlyStatic: true };
    current.entries.push.apply(current.entries, alwaysEntries.concat(staticEntries));
  } else if (onlyStaticNoAlways) {
    current.type = { onlyStaticNoAlways: true };
    current.entries.push.apply(current.entries, staticEntries);
  } else if (onlyAllways) {
    current.type = { onlyAllways: true };
    current.entries.push.apply(alwaysEntries);
  }

  return current.entries;
}

export default {
  clearDynamic,
  addDynamicEntry,
  setSingleDynamicEntry,
  getEntries
}
