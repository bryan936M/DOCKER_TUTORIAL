FROM node:21.5.0-alpine
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .
CMD  node index.js