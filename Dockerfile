# --------------------------------------
# build from a base image that includes
# everything needed to run Node.js v8.1.4
FROM node:8.1.4
# --------------------------------------

# --------------------------------------
# create a folder for the app, from
# which everything will be run
RUN mkdir -p /var/app
WORKDIR /var/app
# --------------------------------------

# --------------------------------------
# cache npm modules for faster builds
RUN yarn global add nodemon babel-cli@7.0.0-alpha.15
COPY ./package.json /var/app
COPY ./yarn.lock /var/app
RUN yarn
# --------------------------------------

# --------------------------------------
# put the app into the image. be sure to
# have a .dockerignore file so you only
# copy the files you need
COPY ./ /var/app
# --------------------------------------

# --------------------------------------
# set environment variables and tcp/ip
# port numbers that will be used
ENV NODE_ENV=development NODE_PATH=./lib:.
EXPOSE 3000 5858 35729
# --------------------------------------

# --------------------------------------
# used for performance improvement when
# installing modules while the container
# is running
VOLUME /var/app/node_modules
# --------------------------------------
