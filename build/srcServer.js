'use strict';

import path from 'path';
import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import esprima from 'esprima';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import chalk from 'chalk';

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

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.post('/code', (req, res) => {
  const base = (req.body.code || '').replace(/console.log/g, 'logger.log');
  const code = `'use strict';\nconst logger = require('./logger');\nlogger.log('Start Running Code!');\n\n${base}\n`;

  if (isValidJS(code)) {
    console.log(chalk.green('Code is valid! Going to save it to file!'));

    const stream = fs.createWriteStream(path.join(__dirname, '..', 'app', 'src', 'code.js'), { autoClose: true, flags: 'w' });
    stream.once('open', () => {
      stream.write(`${code}\n`);
      stream.end();

      console.log(chalk.green('Code was saved to file!'));
    });

    return res.sendStatus(200);
  } else {
    console.log(chalk.red('Code is Invalid! Do Nothing!'));

    return res.sendStatus(500);
  }
});

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
