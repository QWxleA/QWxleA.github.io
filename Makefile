SHELL := /bin/bash
OPTIM := /Applications/ImageOptim.app/Contents/MacOS/ImageOptim 
SCRPT := ./scripts/export-blog
IMG   := ./static/assets
IMGS  := $(wildcard $(IMG)/*.png $(IMG)/*.jpg) 
.POSIX:
.PHONY: push update watch
all: help

help: ## Show this help
	@egrep -h '\s##\s' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

push: ## Push pages to github / upstream
	git push origin master

update: ## Add new items / prepare to push upstream (Don't forget to commit)
	hugo
	git add .

watch: ## Run the local development server
	hugo --buildDrafts --watch server --disableFastRender --ignoreCache

import: ## Import latest Logseq pages
	$(SCRPT) -x

clean: ## Reset blog to pristine state 
	$(SCRPT) -c

cleanall: ## Reset blog to pristine state (Also Images!)
	$(SCRPT) -z

# https://imageoptim.com/command-line.html
optim: ## reduce image sizes
	$(OPTIM) $(IMGS)

zonk: ## testing new stuff
	hugo-obsidian -input=content -output=assets/indices -index -root=. && hugo --buildDrafts --watch server --disableFastRender --ignoreCache