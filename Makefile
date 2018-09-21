kill-old-processes:
	killall node & killall node || true

stop-mongo:
	docker stop calendar-db || true

start-mongo:
	docker run --rm -p 27017:27017 --name calendar-db -d mongo:4.1

start-server:
	npm run start-server &

start-client:
	npm run start-client &

build: kill-old-processes stop-mongo start-mongo start-server start-client

build-ci: start-mongo