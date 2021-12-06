build:
	docker-compose build
up:
	docker-compose up -d
	sleep 1
	docker logs bot
down:
	docker-compose down