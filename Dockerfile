FROM node:10

RUN mkdir -p /app/node-express-app
WORKDIR /app/node-express-app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

COPY index.js ./

EXPOSE 3000

CMD node index.js