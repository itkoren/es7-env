'use strict';

/*eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk'; // color output

process.env.NODE_ENV = 'production'; // this assures babel dev config doesn't apply

console.log(chalk.blue('Generating minified bundle for production. This will take a moment...'));

webpack(webpackConfig).run((err, stats) => { // process our webpack config
  if (err) { // so fatal error occurred; stop here
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) { // log any errors
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }

  if (jsonStats.hasWarnings) { // log any warnings
    console.log(chalk.yellow('Webpack generated the following warnings: '));
    jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
  }

  console.log(`Webpack stats: ${stats}`); // log stats

  // if we got this far, the build succeeded
  console.log(chalk.green('Your app has been built for production and written to /dist!'));

  return 0;
});
