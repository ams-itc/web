# Makefile for Vite Docker with runtime env.js support

# Variables
IMAGE_NAME := ams-web
VITE_API_URL ?= http://localhost:9876/api/v1
VITE_OTHER_KEY ?= default-value
PORT ?= 8080

# Build Docker image
.PHONY: build
build:
	docker build -t $(IMAGE_NAME) .

# Run container
.PHONY: run
run:
	docker run -d \
		-p $(PORT):80 \
		-e VITE_API_URL=$(VITE_API_URL) \
		-e VITE_OTHER_KEY=$(VITE_OTHER_KEY) \
		--name $(IMAGE_NAME) \
		$(IMAGE_NAME)

# Stop container
.PHONY: stop
stop:
	docker stop $(IMAGE_NAME) || true
	docker rm $(IMAGE_NAME) || true

# Rebuild and run
.PHONY: rebuild
rebuild: stop build run

# Clean dangling images
.PHONY: clean
clean:
	docker rmi $(IMAGE_NAME) || true
	docker system prune -f