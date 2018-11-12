stop-mongo:
	docker stop calendar-db || true

start-mongo:
	docker run -p 27017:27017 --name calendar-db -d --rm mongo:4.1

install-dependencies:
	npm install

start-dev:
	npm run start-dev &

build: stop-mongo start-mongo install-dependencies start-dev

build-ci: start-mongo