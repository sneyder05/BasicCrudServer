FROM node:12.19.0-alpine

WORKDIR /usr/src

RUN yarn global add npm@6.14.8
RUN yarn global add typescript@4.0.3

COPY . ./app

WORKDIR /usr/src/app

RUN yarn install
RUN yarn build

EXPOSE 3000

CMD yarn start:dc