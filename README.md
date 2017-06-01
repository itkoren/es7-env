# ES7 Environment with Docker

An isolated docker based environment to run the latest ES7 (ES2017) features with latest and greatest Node.js and Babel versions, while keeping existing projects at zero risk.

### Getting Started

To get started with this repository:

- Install Docker on your machine ([Docker for Mac](https://docs.docker.com/docker-for-mac/), [Docker for Windows](https://docs.docker.com/docker-for-windows/), or just play Docker on linux)
- Make sure you have any version of Node.js installed on your machine (you just need to be able to "npm run"), or [Install Node.js](https://nodejs.org/en/download/package-manager/)
- (Optional) [Install yarn](https://yarnpkg.com/lang/en/docs/install/) on your machine (It will make your life better ;)
- Clone the above repository to your machine
- Run `npm run es7:make` or `yarn es7:make` in the console
- Run `npm run es7` or `yarn es7` in the same console

The command line is of a shell running within a docker container, which includes all needed tools to experiment and try ES7 new features. There are a few options for what you can do.

### Run Node.js v8.0

The container has Node.js v8.0 installed.

You can use this version of Node.js to run your code by running `F={filename.js} npm run es7:node` or `F={filename.js} yarn es7:node` from an external command line, or `node ./app/src/{filename.js}` from a command line whithin the container.

### Run Babel.js v7.0-alpha.10

The container has an alpha version of the latest Babel.js installed and configured.

To run Babel.js and use TC-39 Working Group features stage 0 through 4, use `npm start` or `yarn start` - for running the devserver (you can than open a web browser and navigate to [http://localhost:3000](http://localhost:3000) to see the result HTML) - or `npm run build` or `yarn build` - for building and creating the distribution version

### Shell into the Container

To open a second command shell into the same docker container, open a new terminal window or command prompt and run:

`npm run es7:sh` or `yarn es7:sh`

This will create a new shell instance inside of the existing container.

After running `npm run es7` or `yarn es7` once and as long as the container is running, you can call `npm run es7:sh` or `yarn es7:sh` as many times as you wish.
