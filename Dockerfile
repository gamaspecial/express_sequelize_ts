FROM node:14.15.4-alpine

RUN apk add --no-cache --virtual python \
 && apk add --no-cache --virtual make \
 && apk add --no-cache --virtual g++

WORKDIR /myapp

ADD package.json /myapp
RUN yarn install
COPY . /myapp

EXPOSE 3000

CMD ["yarn", "watch"]
