FROM node:8.14.0-slim

COPY . /var/www/react-monthly-events-sandbox
WORKDIR /var/www/react-monthly-events-sandbox

RUN npm install

EXPOSE 9001
EXPOSE 9002

CMD [ "npm", "run", "start-dev"]