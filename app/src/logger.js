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

function log() {
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
  } else {
    console.log.apply(this, args); // eslint-disable-line no-console
  }
}

module.exports = {
  log
};
