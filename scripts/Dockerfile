FROM node:12-alpine

WORKDIR /usr/src/app

COPY ../ .

RUN yarn install --frozen-lockfile

ENV NODE_ENV production

RUN yarn build

EXPOSE 3000

CMD yarn start
