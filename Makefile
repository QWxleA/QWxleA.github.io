SCRPT := ./scripts/export-blog
SHELL := /bin/bash
OPTIM := /Applications/ImageOptim.app/Contents/MacOS/ImageOptim 
SCRPT := ./scripts/export-blog
IMG   := ./static/assets
IMGS  := $(wildcard $(IMG)/*.png $(IMG)/*.jpg) 
.POSIX:
.PHONY: push update watch import
.DEFAULT_GOAL := serve
# all: help

help: ## Show all Makefile targets
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

clean: killhugo ## Reset blog to pristine state 
	$(SCRPT) -c

cleanall: killhugo ## Reset blog to pristine state (Also Images!)
	$(SCRPT) -z

# https://imageoptim.com/command-line.html
optim: ## reduce image sizes
	$(OPTIM) $(IMGS)

serve: ## Serve Quartz locally
	# hugo-obsidian -input=content -output=assets/indices -index -root=. && hugo server --enableGitInfo --disableFastRender
	hugo server --enableGitInfo --disableFastRender

importscript: ## Run import script
	$(SCRPT) -x 

killhugo: ## stop running hugo processes
	killall hugo

reimport: importscript killhugo serve ## Import files and restart hugo
