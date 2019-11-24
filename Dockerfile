FROM node:latest

WORKDIR app

COPY ./build/ .

RUN npm install -g serve
