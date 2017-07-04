'use strict';

const logLevel = {
  log: '»',
  info: 'ℹ',
  success: '✔',
  warn: '⚠',
  error: '✘',
  debug: '🐛',
  // debug: '🐞',
  dir: ' ',
};

// cache the log element
let consoleLog;

function getOrCreateElement(id, type, parent) {
  let el = document.getElementById(id);

  if (!el) {
    el = document.createElement(type);
    el.id = id;
    (parent || document.body).appendChild(el);
  }

  el.classList.add(id);

  return el;
}

function logTo() {
  if (!consoleLog) {
    const outer = getOrCreateElement('console-box', 'pre');
    consoleLog = getOrCreateElement('console-log', 'code', outer);
  }
  return consoleLog;
}

function domLog(level) {
  // the first arg is the log-level symbol, and should not participate in processing
  const args = [].slice.call(arguments, 1);

  const message = args.map(arg => {
    if ('string' === typeof arg) {
      return `"${arg}"`;
    } else if ('object' === typeof arg && !(arg instanceof Error)) {
      try {
        return JSON.stringify(arg);
      } catch (ex) {
        // Nothing
      }
    }
    return String(arg);
  }).join(' ');

  logTo().textContent += `${level} ${message}\n`;
}

function domClear() {
  logTo().textContent = '';
}

function log() {
  const args = [].slice.call(arguments);

  if (isDom()) {
    args.unshift(logLevel.log);
    domLog.apply(null, args);
  } else {
    console.log.apply(this, args); // eslint-disable-line no-console
  }
}

function success() {
  const args = [].slice.call(arguments);

  if (isDom()) {
    args.unshift(logLevel.success);
    domLog.apply(null, args);
  } else {
    console.log(require('chalk').green.apply(this, args)); // eslint-disable-line no-console
  }
}

function error() {
  const args = [].slice.call(arguments);

  if (isDom()) {
    args.unshift(logLevel.error);
    domLog.apply(null, args);
  } else {
    console.error(require('chalk').red.apply(this, args)); // eslint-disable-line no-console
  }
}

function warn() {
  const args = [].slice.call(arguments);

  if (isDom()) {
    args.unshift(logLevel.warn);
    domLog.apply(null, args);
  } else {
    console.warn(require('chalk').orange.apply(this, args)); // eslint-disable-line no-console
  }
}

function info() {
  const args = [].slice.call(arguments);

  if (isDom()) {
    args.unshift(logLevel.info);
    domLog.apply(null, args);
  } else {
    console.info.apply(this, args); // eslint-disable-line no-console
  }
}

function debug() {
  const args = [].slice.call(arguments);

  if (isDom()) {
    args.unshift(logLevel.debug);
    domLog.apply(null, args);
  } else {
    console.info.apply(this, args); // eslint-disable-line no-console
  }
}

function dir() {
  const args = [].slice.call(arguments);
  if (isDom()) {
    args.unshift(logLevel.dir);
    domLog.apply(null, args);
  }
}

function clear() {
  if (isDom()) {
    domClear();
  }
}

function isDom() {
  return 'undefined' !== typeof document;
}

module.exports = {
  log,
  success,
  error,
  warn,
  info,
  debug,
  dir,
  clear,
};
