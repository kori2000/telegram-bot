build:
	docker-compose build
up:
	docker-compose up -d
	echo "Container started..."
	sleep 3
	docker logs cloudagent bot
down:
	docker-compose down