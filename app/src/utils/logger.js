'use strict';

let consoleLog;


function logTo() {
  let id = 'console-log';
  let logEl = document.getElementById(id);

  if (!logEl) {
    logEl = document.createElement('textarea');
    logEl.id = id;
    document.body.appendChild.appendChild(logEl);
  }

  logEl.readOnly = true;
  logEl.classList.add(id);

  return logEl;
}

function logInBrowser() {
  const args = [].slice.call(arguments);

  if ('undefined' !== typeof document) {
    args.forEach(arg => {
      let msg = arg;

      if ('string' !== typeof msg) {
        try {
          msg = JSON.stringify(msg);
        } catch (ex) {
          // Nothing
        }
      }

      consoleLog = consoleLog || logTo();
      consoleLog.textContent += (msg + ' ');
    });

    consoleLog.textContent += '\n';

    consoleLog.scrollTop = consoleLog.scrollHeight;
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
