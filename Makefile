FIG = docker-compose

build:
	@$(FIG) build
up:
	@$(FIG) up
setup:
	cp .env.sample .env
down:
	@$(FIG) down
restart:
	@$(FIG) stop
	@$(FIG) start
clean:
	@docker image prune
	@docker volume prune
