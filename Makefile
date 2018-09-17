build:
	docker run --rm -p 27017:27017 --name calendar-db -d mongo:4.1