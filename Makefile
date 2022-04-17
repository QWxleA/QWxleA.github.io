SHELL := /bin/bash
.POSIX:
.PHONY: push update watch
all: help

help: ## Show this help
	@egrep -h '\s##\s' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

push: ## Push pages to github / upstream
	git push origin master

update: ## Add new items / prepare to push upstream
	hugo
	git add .

watch: ## Run the local development server
	hugo --buildDrafts --watch server --disableFastRender --ignoreCache

import: ## Import latest Logseq pages
	./scripts/export-blog -x