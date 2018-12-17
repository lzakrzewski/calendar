build:
	docker-compose up -d

lint-fix:
	docker-compose run web npm run lint-fix

test:
	docker-compose run web npm run test

test-ci:
	docker-compose run web npm run lint-ci
	docker-compose run web npm run test-ci