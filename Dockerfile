FROM node:8.14.0-slim

WORKDIR /var/www/react-monthly-events-sandbox

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 9001
EXPOSE 9002

CMD [ "npm", "run", "start-dev"]