FROM node:16.15.0-alpine
WORKDIR /usr/src/app
RUN  npm install -g firebase-tools
