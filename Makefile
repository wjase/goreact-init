PROJECTNAME=$(shell basename "$(PWD)")

# Go related variables.
GOFILES=$(wildcard *.go)

# Redirect error output to a file, so we can show it in development mode.
STDERR=/tmp/.$(PROJECTNAME)-stderr.txt

# PID file will store the server process id when it's running on development mode
PID=/tmp/.$(PROJECTNAME)-api-server.pid

# Make is verbose in Linux. Make it silent.
MAKEFLAGS += --silent

js-build: js-test 
	(cd ui && yarn build)

js-test:
	(cd ui && yarn test --watchAll=false --detectOpenHandles)

go-compile: go-clean go-get go-build

go-build:  go-get go-generate 
	@echo "  >  Building binary..."
	go build -o $(PROJECTNAME) $(GOFILES)

go-generate:
	@echo "  >  Generating dependency files..."
	go generate $(generate)

go-get:
	@echo "  >  Checking if there is any missing dependencies..."
	go get $(get)

go-install:
	go install $(GOFILES)

clean:
	@echo "  >  Cleaning build files"
	go clean
	rm -rf ui/build

build: go-build js-build