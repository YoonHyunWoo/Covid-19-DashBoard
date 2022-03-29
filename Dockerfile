FROM node:12
WORKDIR /usr/src/app

COPY . .
RUN npm install express
EXPOSE 3000
CMD [ "node", "app/server.js"]