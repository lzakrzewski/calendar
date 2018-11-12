stop-mongo:
	docker stop calendar-db || true

start-mongo:
	docker run -p 27017:27017 --name calendar-db -d --rm mongo:4.1

install-dependencies:
	npm install

install-dependencies-prod:
	npm install --production

start-dev:
	npm run start-dev &

start-prod:
	npm run build
	npm run start

build: stop-mongo start-mongo install-dependencies start-dev

build-prod: stop-mongo start-mongo install-dependencies-prod  start-prod

build-ci: start-mongo