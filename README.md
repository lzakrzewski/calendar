# react-monthly-events-sandbox [![Build Status](https://travis-ci.org/lzakrzewski/react-monthly-events-sandbox.svg?branch=master)](https://travis-ci.org/lzakrzewski/react-monthly-events-sandbox)

The working example of [react-monthly-events](https://github.com/lzakrzewski/react-monthly-events) [React](https://reactjs.org/) component.    
You can easily setup this app on your local-machine (See [Installation](#installation)).

Online demo is available!     
[react-monthly-events.herokuapp.com](https://react-monthly-events.herokuapp.com/)

![Screenshot](resources/screenshot.png)

## Requirements
- [docker-compose](https://docs.docker.com/compose/)
- [GNU make](https://www.gnu.org/software/make/manual/make.html) (optional)

## Installation 
- `git clone git@github.com:lzakrzewski/react-monthly-events-sandbox.git`
- `cd react-monthly-events-sandbox`

- `docker-compose up -d` (or simply run just `make build`) 

Once its finished, the app should be available here: [localhost:9001](http://localhost:9001/) on your local machine.

## Example usage of `MonthlyEvents` component
See: [Calendar component](./src/client/pages/Calendar.jsx)   

## Testing

#### Run eslint linter code fix
- `docker-compose run --rm web npm run lint-fix` (`make lint-fix`)

#### Run the all tests
- `docker-compose run --rm web npm run test` (`make test`)
