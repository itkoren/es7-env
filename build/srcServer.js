'use strict';

import path from 'path';
import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import esprima from 'esprima';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import config from '../webpack.config.dev';
import chalk from 'chalk';
import Entries from './entries';
import files from './files';

function isValidJS(js) {
  let valid = true;

  try {
    esprima.parse(js);
  } catch (ex) {
    valid = false;
  }

  return valid;
}

/* eslint-disable no-console */
const port = 3000;
const app = express();
const compiler = webpack(config);
const webpackDevMiddlewareInstance = webpackMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

app.get('/files', (req, res) => {
  res.json(files);
});

app.post('/code', (req, res) => {
  console.log(req.body);
  if (req.body.code) {
    const base = req.body.code || '';
    const code = `'use strict';\nconst console = require('../utils/logger');\nconsole.log('Start Running Code!');\n\n${base}\n`;

    if (isValidJS(code)) {
      console.log(chalk.green('Code is valid! Going to save it to file!'));

      const stream = fs.createWriteStream(path.join(__dirname, '..', 'app', 'src', 'code', 'code.js'), {
        autoClose: true,
        flags: 'w'
      });
      stream.once('open', () => {
        stream.write(`${code}\n`);
        stream.end();

        console.log(chalk.green('Code was saved to file!'));
        Entries.setSingleDynamicEntry(path.join(__dirname, '..', 'app', 'src', 'code', 'code'));

        // The configuration is changed
        compiler.options.entry = config.entry;

        // Recompile the bundle with the new config
        webpackDevMiddlewareInstance.invalidate();
      });

      return res.sendStatus(200);
    } else {
      console.log(chalk.red('Code is Invalid! Do Nothing!'));

      return res.sendStatus(500);
    }
  } else if (req.body.file) {
    Entries.setSingleDynamicEntry(path.join(__dirname, '..', 'app', 'src', 'code', req.body.file));

    // The configuration is changed
    compiler.options.entry = config.entry;

    // Recompile the bundle with the new config
    webpackDevMiddlewareInstance.invalidate();
  } else {
    console.log(chalk.red('No Valid Code to Run! Do Nothing!'));

    return res.sendStatus(500);
  }
});

app.use(webpackDevMiddlewareInstance);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'app', 'src', 'index.html'));
});

app.listen(port, err => {
  if (err) {
    console.log(chalk.red(err));
  } else {
    console.log(chalk.green(`Server is running at http://localhost:${port}`));
  }
});
