kill-old-processes:
	killall node & killall node || true

stop-mongo:
	docker stop calendar-db || true

start-mongo:
	docker run -p 27017:27017 --name calendar-db -d --rm mongo:4.1

start-dev:
	npm run start-dev &

build: kill-old-processes stop-mongo start-mongo start-dev

build-ci: start-mongo