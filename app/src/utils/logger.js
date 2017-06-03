'use strict';

let divLog;

function createOuterElement() {
  const id = 'console-log-div';
  let outer = document.getElementById(id);

  if (!outer) {
    outer = document.createElement('fieldset');
    outer.id = id;
    document.body.appendChild(outer);
  }

  outer.classList.add(id);

  const style = outer.style;
  style.fontFamily = 'monospace';
  style.marginTop = '20px';
  style.marginLeft = '10px';
  style.marginRight = '10px';
  style.marginBottom = '20px';
  style.whiteSpace = 'pre';
  style.border = '1px solid black';
  style.borderRadius = '5px';
  style.padding = '5px 10px';

  return outer;
}

function logTo() {
  const outer = createOuterElement();
  const caption = document.createTextNode('console output');
  const legend = document.createElement('legend');
  const div = document.createElement('div');

  div.id = 'console-log-text';

  legend.appendChild(caption);
  outer.appendChild(legend);
  outer.appendChild(div);

  return div;
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

      divLog = divLog || logTo();
      divLog.textContent += ' ' + msg;
    });

    divLog.textContent += '\n';
  }
}

function log() {
  const args = [].slice.call(arguments);

  if ('undefined' !== typeof document) {
    args.unshift('LOG:');
    logInBrowser.apply(null, args);
  } else {
    console.log.apply(this, args); // eslint-disable-line no-console
  }
}

function success() {
  const args = [].slice.call(arguments);

  if ('undefined' !== typeof document) {
    args.unshift('SUCCESS:');
    logInBrowser.apply(null, args);
  } else {
    console.log(require('chalk').green.apply(this, args)); // eslint-disable-line no-console
  }
}

function error() {
  const args = [].slice.call(arguments);

  if ('undefined' !== typeof document) {
    args.unshift('ERROR:');
    logInBrowser.apply(null, args);
  } else {
    console.error(require('chalk').red.apply(this, args)); // eslint-disable-line no-console
  }
}

function warn() {
  const args = [].slice.call(arguments);

  if ('undefined' !== typeof document) {
    args.unshift('WARNING:');
    logInBrowser.apply(null, args);
  } else {
    console.warn(require('chalk').orange.apply(this, args)); // eslint-disable-line no-console
  }
}

function info() {
  const args = [].slice.call(arguments);

  if ('undefined' !== typeof document) {
    args.unshift('INFO:');
    logInBrowser.apply(null, args);
  } else {
    console.info.apply(this, args); // eslint-disable-line no-console
  }
}

function dir() {
  const args = [].slice.call(arguments);
  args.unshift('DIR:');
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
