'use strict';

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
  let outer = getOrCreateElement('console-box', 'pre');
  return getOrCreateElement('console-log', 'code', outer);
}

function logInBrowser() {
  const args = [].slice.call(arguments);

  if ('undefined' !== typeof document) {

    let message = args.map(arg => {
      if ('string' !== typeof arg && !(arg instanceof Error)) {
        try {
          arg = JSON.stringify(arg);
        } catch (ex) {
          // Nothing
        }
      }
      return arg;
    }).join(' ');

    consoleLog = consoleLog || logTo();
    consoleLog.textContent += (message + '\n');
    consoleLog.parentNode.scrollTop = consoleLog.parentNode.scrollHeight;
  }
}

function log() {
  const args = [].slice.call(arguments);

  if ('undefined' !== typeof document) {
    args.unshift('[LOG]');
    logInBrowser.apply(null, args);
  } else {
    console.log.apply(this, args); // eslint-disable-line no-console
  }
}

function success() {
  const args = [].slice.call(arguments);

  if ('undefined' !== typeof document) {
    args.unshift('[SUCCESS]');
    logInBrowser.apply(null, args);
  } else {
    console.log(require('chalk').green.apply(this, args)); // eslint-disable-line no-console
  }
}

function error() {
  const args = [].slice.call(arguments);

  if ('undefined' !== typeof document) {
    args.unshift('[ERROR]');
    logInBrowser.apply(null, args);
  } else {
    console.error(require('chalk').red.apply(this, args)); // eslint-disable-line no-console
  }
}

function warn() {
  const args = [].slice.call(arguments);

  if ('undefined' !== typeof document) {
    args.unshift('[WARNING]');
    logInBrowser.apply(null, args);
  } else {
    console.warn(require('chalk').orange.apply(this, args)); // eslint-disable-line no-console
  }
}

function info() {
  const args = [].slice.call(arguments);

  if ('undefined' !== typeof document) {
    args.unshift('[INFO]');
    logInBrowser.apply(null, args);
  } else {
    console.info.apply(this, args); // eslint-disable-line no-console
  }
}

function dir() {
  const args = [].slice.call(arguments);
  args.unshift('[DIR]');
  logInBrowser.apply(null, args);
}

module.exports = {
  log,
  success,
  error,
  warn,
  info,
  dir
};
