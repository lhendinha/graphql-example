FROM node:18-alpine

ARG PORT
ARG MONGODB_URI

ENV PORT=$PORT
ENV MONGODB_URI=$MONGODB_URI

WORKDIR /src
COPY package.json yarn.lock /src/
RUN yarn install --production

COPY . /src

EXPOSE 4000

CMD yarn start
