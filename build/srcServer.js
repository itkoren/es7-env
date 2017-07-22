/* eslint-disable no-console */
'use strict';

import path from 'path';
import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import { parse } from 'esprima';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import config from '../webpack.config.dev';
import chalk from 'chalk';
import Entries from './entries';
import files from './files';

function shouldValidate(js) {
  return !js || !js.includes('esprima no-validate');
}

function isValidJS(js) {
  let valid = true;

  try {
    parse(js);
  } catch (ex) {
    console.log(ex);
    valid = false;
  }

  return valid;
}

function deleteFile(file, complete = () => {}) {
  if (file) {
    fs.stat(file, (err, stats) => {
      if (!err && stats.isFile()) {
        fs.unlink(file, err => {
          if (!err) {
            console.log(`file ${file} was deleted successfully`);
          } else {
            console.log(`file ${file} could not be deleted`);
          }

          complete(err);
        });
      } else {
        complete(err);
      }
    });
  } else {
    complete(new Error(`file ${file} not found!`));
  }
}

const port = 3000;
const dirSrc = path.join(__dirname, '..', 'app', 'src');
const dirSnippets = path.join(dirSrc, 'snippets');
const entry = path.join(dirSnippets, 'code');
const app = express();
const compiler = webpack(config);
const webpackDevMiddlewareInstance = webpackMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
});

// Delete old code file
deleteFile(`${entry}.js`);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

// serve static files
app.use(express.static('./public'));

app.get('/files', (req, res) => {
  res.json(files);
});

app.post('/code', (req, res) => {
  if (req.body.code) {
    const code = req.body.code || '';

    if (!shouldValidate(code) || isValidJS(code)) {
      console.log(chalk.green('Code is valid! Going to save it to file!'));

      const stream = fs.createWriteStream(`${entry}.js`, {
        autoClose: true,
        flags: 'w'
      });

      stream.once('open', () => {
        stream.write(`${code}\n`);
        stream.end();

        console.log(chalk.green('Code was saved to file!'));
        Entries.setSingleDynamicEntry(entry);

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
    Entries.setSingleDynamicEntry(path.join(dirSnippets, req.body.file));

    // The configuration is changed
    compiler.options.entry = config.entry;

    // Recompile the bundle with the new config
    webpackDevMiddlewareInstance.invalidate();

    return res.sendStatus(200);
  } else {
    console.log(chalk.red('No Valid Code to Run! Do Nothing!'));

    return res.sendStatus(500);
  }
});

app.use(webpackDevMiddlewareInstance);

app.get('/', (req, res) => {
  res.sendFile(path.join(dirSrc, 'index.html'));
});

app.listen(port, err => {
  if (err) {
    console.log(chalk.red(err));
  } else {
    console.log(chalk.green(`Server is running at http://localhost:${port}`));
  }
});
